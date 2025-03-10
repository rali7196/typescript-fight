import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Message, { MessageProps } from "../Message/Message";

import styles from "./Conversation.module.css";

export interface ConversationProps {
    messages: string[];
    showInitialDialogue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Conversation = (props: ConversationProps) => {
    const [displayMessages, setDisplayMessages] = useState<string[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [showButton, setShowButton] = useState<boolean>(false);

    useEffect(() => {
        if (index < props.messages.length) {
            const interval = setInterval(() => {
                setDisplayMessages((prev) => [...prev, props.messages[index]]);
                setIndex((prevIndex) => prevIndex + 1);
            }, 500);

            return () => clearInterval(interval); // Cleanup interval
        } else {
            setShowButton(true);
        }
    }, [index, props.messages]);

    function renderMessages() {
        return displayMessages.map((value: string, index: number) => {
            const messageProps: MessageProps = {
                message: value,
                key: index,
                renderDirection: index % 2 === 0 ? "left" : "right",
            };
            return <Message {...messageProps} />;
        });
    }

    return (
        <>
            <div className={styles["masterContainer"]}>
                <div className={styles["conversationContainer"]}>
                    {renderMessages()}
                </div>
                {showButton && (
                    <Button
                        onClick={() => props.showInitialDialogue(false)}
                        className={styles["button"]}
                        variant="contained"
                    >
                        Click to hide
                    </Button>
                )}
            </div>
        </>
    );
};

export default Conversation;
