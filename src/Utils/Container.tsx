import React, { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    styles?: string;
};

const Container = ({ children, styles = '' }: ContainerProps) => {
    return (
        <div className={`p-4 border rounded bg-gray-100 shadow-md ${styles}`}>
            {children}
        </div>
    );
};

export default Container;
