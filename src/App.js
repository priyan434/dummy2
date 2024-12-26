import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import routes from './routes/Routes'
import defaultConfig from './configs/defaultConfig';

function App() {
  document.title = defaultConfig.title || '';
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('user') || null);

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes(currentUser,setCurrentUser).map((route, index) => {
            if (route.children) {
              return (
                <Route path={route.path} element={route.element} key={index}>
                  {route?.children.map((child, i) => (
                    <Route path={child.path} element={child.element} key={i} />
                  ))}
                </Route>
              );
            }
            return <Route path={route.path} element={route.element} key={index} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
