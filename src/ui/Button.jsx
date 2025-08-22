// eslint-disable-next-line react/prop-types
const Button = ({ children, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className="text stone-800 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-100 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
