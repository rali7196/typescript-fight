import React, { useState } from "react";

import styles from "./Competition.module.css";
import BubbleSort, { BubbleSortProps } from "../BubbleSort/BubbleSort";
import MergeSort, { MergeSortProps } from "../MergeSort/MergeSort";
import { mergeSlotProps } from "@mui/material";

// export interface CompetitionProps {

// }

const Competition = () => {
    const randomNumbers: number[] = [];
    const numbersToGenerate = 50;

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
    };

    const MergeSortProps: MergeSortProps = {
        numbers: randomNumbers,
        renderNumbers: renderNumbers,
        sleep: sleep,
    };

    return (
        <>
            <BubbleSort {...bubbleSortProps} />
            <MergeSort {...mergeSlotProps} />
        </>
    );
};

export default Competition;
