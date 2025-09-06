import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled = false, to, type = 'base' }) => {
  const buttonBaseCssClass = `text stone-800 inline-block rounded-full bg-yellow-400 font-semibold uppercase 
  tracking-wide transition-colors duration-300 hover:bg-yellow-100 focus:outline-none focus:ring 
  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed p-2`;

  const buttonCssClasses = {
    base: buttonBaseCssClass,
    primary: `${buttonBaseCssClass} p-2`,
    small: `${buttonBaseCssClass} text-sm`,
    secondary: `text-stone-800 inline-block rounded-full font-semibold uppercase 
    tracking-wide transition-colors duration-300 hover:bg-stone-200 focus:outline-none focus:ring 
    focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed border-2 border-stone-300 p-2`,
  };
  if (to) {
    return (
      <Link to={to} className={buttonCssClasses[type]} type="primary">
        {children}
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={buttonCssClasses[type]}>
      {children}
    </button>
  );
};

export default Button;
