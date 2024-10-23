import React from "react";
import "./Header.css";

interface HeaderProps {
    size: 'medium' | 'large' | 'xlarge';
}

const Header: React.FC<HeaderProps> = ({ size }) => {
    if (size === 'medium') {
        return <h3 className="cc-header">Medium</h3>
    } else if (size === 'large') {
        return <h2 className="cc-header">Large</h2>
    } else {
        return <h1 className="cc-header">Extra Large</h1>
    }
}

export default Header;
