import React from "react";

import styles from "./Message.module.css";

export interface MessageProps {
    message: string;
    key: number;
    renderDirection: "left" | "right";
}

const Message = (props: MessageProps) => {
    return (
        <div
            key={props.key}
            className={styles["messageContainer"]}
            style={
                props.renderDirection === "right"
                    ? { marginLeft: "auto" }
                    : { marginRight: "auto" }
            }
        >
            {props.message}
        </div>
    );
};

export default Message;
