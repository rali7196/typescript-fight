import React, { JSX, useEffect, useState } from "react";
import styles from "./BubbleSort.module.css";
import { Button } from "@mui/material";

export interface BubbleSortProps {
    numbers: number[];
    renderNumbers: (numbers: number[]) => JSX.Element[];
    sleep: (sleepTime: number) => Promise<void>;
    setFinished: React.Dispatch<React.SetStateAction<boolean>>;
    finished: boolean;
    showFinalConversation: React.Dispatch<React.SetStateAction<boolean>>;
}

const BubbleSort = (props: BubbleSortProps) => {
    const [bubbleSortNumbers, setBubbleSortNumbers] = useState<number[]>(
        props.numbers
    );

    async function bubbleSort(arr: number[]): Promise<number[]> {
        let swapped: boolean;

        for (let i = 0; i < arr.length - 1; i++) {
            swapped = false;

            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
                    const newArr = [...arr];
                    swapped = true;
                    setBubbleSortNumbers(newArr);
                    await props.sleep(100);
                }
            }
            if (!swapped) {
                props.setFinished(true);
                break;
            }
        }

        return arr;
    }

    useEffect(() => {
        bubbleSort(props.numbers);
    }, []);

    return (
        <div className={styles['masterContainer']}>
            {props.finished && (
                <Button
                    onClick={() => props.showFinalConversation(true)}
                    variant="contained"
                >
                    Continue the story
                </Button>
            )}
            <div className={styles["bubbleSortContainer"]}>
                {props.renderNumbers(bubbleSortNumbers)}
            </div>
        </div>
    );
};

export default BubbleSort;
