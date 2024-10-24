import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import "./Paragraph.css";

interface ParagraphProps extends PropsWithChildren {
    uppercase: 'default' | 'uppercase';
}

const Paragraph: React.FC<ParagraphProps> = ({ uppercase, children }) => {
    return <p className={classNames("cc-paragraph", {"uppercase": uppercase === 'uppercase'})}>{children}</p>
}

export default Paragraph;
