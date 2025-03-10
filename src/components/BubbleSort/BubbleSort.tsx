import React, { JSX, useEffect, useState } from "react";
import styles from "./BubbleSort.module.css";

export interface BubbleSortProps {
    numbers: number[];
    renderNumbers: (numbers: number[]) => JSX.Element[];
    sleep: (sleepTime: number) => Promise<void>;
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
            if (!swapped) break;
        }

        return arr;
    }

    useEffect(() => {
        bubbleSort(props.numbers);
    }, []);

    return (
        <div className={styles["bubbleSortContainer"]}>
            {props.renderNumbers(bubbleSortNumbers)}
        </div>
    );
};

export default BubbleSort;
