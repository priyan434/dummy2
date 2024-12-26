import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('user');
    navigate('/login')
  }
  return (
    <>
      <button onClick={handleLogout} className="border font-medium  text-red-600 p-2">Log out</button>
    </>
  )
}
export default Logout
