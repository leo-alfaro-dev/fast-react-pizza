import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LinkButton = ({ children, to }) => {
  return (
    <Link
      className="rounded text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
