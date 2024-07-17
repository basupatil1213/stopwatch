import React from 'react';

type ButtonProps = {
    onClick: () => void;
    styles: string;
    displayName: string;
    disabled?: boolean;
};

const Button = ({ onClick, styles, displayName, disabled }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`focus:outline-none transition duration-150 ease-in-out ${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {displayName}
        </button>
    );
};

export default Button;
