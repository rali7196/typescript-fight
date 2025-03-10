import { Button } from "@mui/material";
import React from "react";

export interface ConversationProps {
    messages: string[];
    showInitialDialogue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Conversation = (props: ConversationProps) => {
    return (
        <>
            <div>{props.messages}</div>
            <Button onClick={() => props.showInitialDialogue(false)}>
                Click to hide
            </Button>
        </>
    );
};

export default Conversation;
