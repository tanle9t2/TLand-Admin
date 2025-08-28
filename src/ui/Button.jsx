import clsx from 'clsx';

const variants = {
  primary: 'text-xl bg-rose-600 text-white px-8 py-2 my-2 rounded-md hover:bg-rose-700 transition',
  secondary: 'text-2xl border bg-white text-black px-8 py-3 my-3 rounded-md hover:bg-gray-200 transition',
  outline: 'bg-transparent border border-gray-600 text-gray-800 hover:bg-gray-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
};

function Button({ type = "button", children, onClick, disabled = false, className = '', variant = 'primary' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        className,
        'px-4 py-2 rounded-md',
        variants[variant],
        disabled ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      {children}
    </button>
  );
}

export default Button;
