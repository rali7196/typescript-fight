import React from "react";

// export interface CompetitionProps {

// }

const Competition = () => {
    const randomNumbers: number[] = [];
    const numbersToGenerate = 50;

    for (let i = 0; i < numbersToGenerate; i++) {
        randomNumbers.push(Math.ceil(Math.random() * 100));
    }

    function renderRandomNumbers() {
        return randomNumbers.map((value: number, index: number) => (
            <span key={index}>{value} &nbsp;</span>
        ));
    }

    return <div>{renderRandomNumbers()}</div>;
};

export default Competition;
