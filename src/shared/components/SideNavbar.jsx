import links from '../urls/AdminLinks';
import {Link, Outlet, useNavigate} from 'react-router-dom';

const SideNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }
  return (
      <div className="flex flex-col bg-gray-100 border-r border-gray-300 w-72 p-6 relative z-50 h-full">

        <nav className="flex flex-col space-y-4">
          {links.map((link) => (<Link
            key={link.path}
            to={link.path}
            className="text-gray-700 text-center font-medium hover:text-blue-600 hover:bg-gray-200 py-3 px-5 rounded"
          >
            {link.label}
          </Link>))}
        </nav>
        <button
          className=" border font-medium border-gray-700 text-red-600 hover:text-red-600 hover:bg-gray-200 py-3 px-5"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>


    )
}
export default SideNavbar
