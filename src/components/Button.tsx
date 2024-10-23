import React from "react";

import "./Button.css";

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return <button className="cc-button">{label}</button>
}

export default Button;
