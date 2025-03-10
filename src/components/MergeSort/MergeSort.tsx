import React, { JSX } from "react";

export interface MergeSortProps {
    numbers: number[];
    renderNumbers: (numbers: number[]) => JSX.Element[];
    sleep: (sleepTime: number) => Promise<void>;
}

const MergeSort = () => {
    function mergeSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
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

    // Example usage:
    const arr = [38, 27, 43, 3, 9, 82, 10];
    console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]

    return <div> hello </div>;
};

export default MergeSort;
