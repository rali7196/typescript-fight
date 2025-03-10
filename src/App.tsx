import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Conversation, { ConversationProps } from "./components/Conversation/Conversation";

function App() {
    const [showInitialDialogue, setShowInitialDialogue] =
        useState<boolean>(true);

    const initialConversationMessages: ConversationProps = {
        messages: ["hello", "hi", "what's up"],
        showInitialDialogue: (value) => setShowInitialDialogue(value)
    }

    return <>
        {showInitialDialogue && <Conversation {...initialConversationMessages}/>}
    </>;
}

export default App;
