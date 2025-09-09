import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  children,
  disabled = false,
  to,
  type = 'base',
  onClick = (e) => {},
}) => {
  const buttonBaseCssClass = `text stone-800 inline-block rounded-full bg-yellow-400 font-semibold uppercase 
  tracking-wide transition-colors duration-300 hover:bg-yellow-100 focus:outline-none focus:ring 
  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed p-2`;

  const buttonCssClasses = {
    base: buttonBaseCssClass,
    primary: `${buttonBaseCssClass} p-2`,
    small: `${buttonBaseCssClass} text-sm`,
    rounded: `${buttonBaseCssClass} px-2.5 py-1.5 text-xs`,
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
    <button disabled={disabled} className={buttonCssClasses[type]} onClick={onClick}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['base', 'primary', 'small', 'secondary', 'rounded']),
  onClick: PropTypes.func,
};

export default Button;
