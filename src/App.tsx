import { useState } from "react";
import "./App.css";
import Conversation, {
    ConversationProps,
} from "./components/Conversation/Conversation";
import Competition, {
    CompetitionProps,
} from "./components/Competition/Competition";

function App() {
    const [showInitialDialogue, setShowInitialDialogue] =
        useState<boolean>(true);

    const [showCompetition, setShowCompetition] = useState<boolean>(false);

    const [showFinalConversation, setShowFinalConversation] =
        useState<boolean>(false);

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
        showButtonProp: true,
    };

    const CompetitionProps: CompetitionProps = {
        showFinalConversation: (value) => {
            setShowFinalConversation(value);
            setShowCompetition(!value);
        },
    };

    const finalConversationMessages: ConversationProps = {
        messages: [
            "Impossible... how did you beat me?",
            "It's simple big O analysis, I run in O(nlog(n)) time, where as you run in O(n^2) time",
            "Damn, I wish I paid attention in data structures and algorithms more...",
            "It is what it is, I always appreciate a good challenge",
        ],
        showInitialDialogue: (value) => {
            setShowInitialDialogue(value);
            setShowCompetition(!value);
        },
        showButtonProp: false,
    };

    return (
        <>
            {showInitialDialogue && (
                <Conversation {...initialConversationMessages} />
            )}

            {!showInitialDialogue && showCompetition && (
                <Competition {...CompetitionProps} />
            )}

            {showFinalConversation && (
                <Conversation {...finalConversationMessages} />
            )}
        </>
    );
}

export default App;
