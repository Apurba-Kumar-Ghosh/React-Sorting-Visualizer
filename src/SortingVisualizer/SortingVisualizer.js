import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import getMergeSort from '../SortingAlgos/MergeSortAlgo'

const SIZE = 310;

const PRIMARY_COLOR = 'turquoise'
const SCNDRY_COLOR = 'red'
const ANIMATION_SPEED_MS = 5;


export function SortingVisualizer() {
    const [array, setArray] = useState([])
    function resetArray() {
        let i = 0;
        let conArr = [];
        for (let j = 0; j < SIZE; j++){
            const num = findRandomInt(5, 710)
            conArr.push(num)
        }
        setArray(conArr)
    }
    function mergeSort() {
       
            let temp = [];
            for (let i = 0; i < 100; i++) {
              temp.push(findRandomInt(1, findRandomInt(300,600)));
            }
        const [animations, sortedArray] = getMergeSort(array.slice());
        let length = animations.length
        let arrayBars = document.getElementsByClassName('array-bars')
        for (let i = 0; i < length; i++){
            let isColorChange = i % 3 !== 2
            if (isColorChange) {
                let [barOneIdx, barTwoIdx] = animations[i]
                let barOneStyle = arrayBars[barOneIdx].style
                let barTwoStyle = arrayBars[barTwoIdx].style
                let color = i % 3 === 0 ? SCNDRY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS)
            } else {
                let [barOneIdx, newHeight] = animations[i];
                let barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`
                },i*ANIMATION_SPEED_MS)
            }
        }
    }
    useEffect(() => {
    resetArray()
        
    }, [])
    return (
      <div className="array-container">
        {array.map((value, idx) => {
          return (
            <div
              key={idx}
              style={{ height: `${value}px` }}
              className="array-bars"
            ></div>
          );
        })}
        <button onClick={resetArray}>Reset Array</button>
        <button onClick={mergeSort}>Merge Sort</button>
      </div>
    );
}

function findRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}
function checkSorting(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            console.log(`a[i] = ${a[i]}   b[i] = ${b[i]}`)
            return false;
        }
            
    }
    return true
}