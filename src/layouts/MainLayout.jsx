import Navbar from '../shared/components/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../shared/components/Footer';

const MainLayout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>)
}
export default MainLayout;
