import React, { useState } from "react";

import styles from "./Competition.module.css";
import BubbleSort, { BubbleSortProps } from "../BubbleSort/BubbleSort";

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

    const bubbleSortProps: BubbleSortProps = {
        numbers: randomNumbers,
        renderNumbers: renderRandomNumbers
    }

    return (
        <BubbleSort {...bubbleSortProps}/>
    );
};

export default Competition;
