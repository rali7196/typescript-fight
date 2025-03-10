import { useState } from "react";
import "./App.css";
import Conversation, {
    ConversationProps,
} from "./components/Conversation/Conversation";
import Competition from "./components/Competition/Competition";

function App() {
    const [showInitialDialogue, setShowInitialDialogue] =
        useState<boolean>(true);

    const [showCompetition, setShowCompetition] = useState<boolean>(false);

    const initialConversationMessages: ConversationProps = {
        messages: [
            "Merge sort! I challenge you to a duel!",
            "Alright, what are the conditions?",
            "Let's see who can sort their numbers the fastest",
        ],
        showInitialDialogue: (value) => {
            setShowInitialDialogue(value);
            setShowCompetition(!value);
        },
    };

    return (
        <>
            {showInitialDialogue && (
                <Conversation {...initialConversationMessages} />
            )}
            {!showInitialDialogue && showCompetition && 
                (
                    <Competition />
                )
            }
        </>
    );
}

export default App;
