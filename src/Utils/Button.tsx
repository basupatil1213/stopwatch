import React from 'react';

type ClickEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

type ButtonProps = {
    styles?: string
    displayName: string
    onClick: ClickEventHandler
    disabled?: boolean
}

const Button = ({ styles, displayName, onClick, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`  ${styles} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
            {displayName}
        </button>
    )
}

export default Button