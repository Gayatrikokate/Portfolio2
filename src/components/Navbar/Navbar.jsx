import { Link } from 'react-router-dom';
// import { IconBrandGithub } from 'tabler-icons-react';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md p-4 flex justify-between items-center">
    <div className="flex items-center">
      {/* <IconBrandGithub className="w-10 h-10 mr-3 text-white" /> */}
      <span className="text-white text-2xl font-bold">Gayatri Kokate</span>
    </div>
    <ul className="flex space-x-6">
      <li>
        <Link
          to="/"
          className="text-white hover:text-gray-200 transition duration-300 text-lg font-semibold"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className="text-white hover:text-gray-200 transition duration-300 text-lg font-semibold"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white hover:text-gray-200 transition duration-300 text-lg font-semibold"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;