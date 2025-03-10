import React, { useState } from "react";

import styles from "./Competition.module.css";
import BubbleSort, { BubbleSortProps } from "../BubbleSort/BubbleSort";
import MergeSort, { MergeSortProps } from "../MergeSort/MergeSort";
import { Button } from "@mui/material";

export interface CompetitionProps {
    showFinalConversation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Competition = (props: CompetitionProps) => {
    const randomNumbers: number[] = [];
    const numbersToGenerate = 50;
    const [finished, setFinished] = useState<boolean>(false);

    for (let i = 0; i < numbersToGenerate; i++) {
        randomNumbers.push(Math.ceil(Math.random() * 100));
    }

    function renderRandomNumbers(numbers: number[]) {
        return numbers.map((value: number, index: number) => (
            <span key={index} className={styles["number"]}>
                {value} &nbsp;
            </span>
        ));
    }

    function sleep(sleepTime: number) {
        return new Promise<void>((resolve) => setTimeout(resolve, sleepTime));
    }

    const bubbleSortProps: BubbleSortProps = {
        numbers: randomNumbers,
        renderNumbers: renderRandomNumbers,
        sleep: sleep,
        setFinished: setFinished,
    };

    const mergeSortProps: MergeSortProps = {
        numbers: randomNumbers,
        renderNumbers: renderRandomNumbers,
        sleep: sleep,
    };

    return (
        <>
            <div className={styles["competitionContainer"]}>
                <BubbleSort {...bubbleSortProps} />
                <MergeSort {...mergeSortProps} />
            </div>
            {finished && (
                <Button
                    onClick={() => props.showFinalConversation(true)}
                    variant="contained"
                >
                    Continue the story
                </Button>
            )}
        </>
    );
};

export default Competition;
