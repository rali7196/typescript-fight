import React, { JSX, useEffect, useRef, useState } from "react";

export interface MergeSortProps {
    numbers: number[];
    renderNumbers: (numbers: number[]) => JSX.Element[];
    sleep: (sleepTime: number) => Promise<void>;
}

const MergeSort = (props: MergeSortProps) => {
    const [steps, setSteps] = useState<number[][]>([]);
    const [finalResult, setFinalResult] = useState<number[] | null>(null);


    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, [steps]); // Trigger scroll when content changes

    async function mergeSort(arr: number[]): Promise<number[]> {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        setSteps((prev) => [...prev, left]);
        await props.sleep(100);

        const right = arr.slice(mid);
        setSteps((prev) => [...prev, right]);

        await props.sleep(100);

        return merge(await mergeSort(left), await mergeSort(right));
    }

    function merge(left: number[], right: number[]): number[] {
        const result: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Concatenate any remaining elements
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    useEffect(() => {
        mergeSort(props.numbers).then(function (values: number[]) {
            setFinalResult(values);
        });
    }, []);

    return (
        <div ref={containerRef}>
            {" "}
            {steps.map((value: number[]) => (
                <div>
                    {value.map((currVal: number) => (
                        <span>{currVal} &nbsp;</span>
                    ))}
                </div>
            ))}{" "}
            {finalResult !== null ? props.renderNumbers(finalResult) : <></>}
        </div>
    );
};

export default MergeSort;
