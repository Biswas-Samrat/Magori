import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className,
    type = 'button'
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fire-ember";

    const variants = {
        primary: "bg-fire-ember text-white hover:bg-orange-700 shadow-lg hover:shadow-orange-900/40",
        secondary: "bg-olive-green text-white hover:bg-green-800 shadow-lg hover:shadow-green-900/40",
        outline: "border-2 border-white text-white hover:bg-white hover:text-charcoal backdrop-blur-sm",
        ghost: "text-cream-white hover:text-fire-ember hover:bg-white/5"
    };

    const classes = classNames(baseStyles, variants[variant], className);

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
};

export default Button;
