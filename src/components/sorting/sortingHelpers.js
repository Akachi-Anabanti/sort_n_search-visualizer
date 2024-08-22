import insertionSort from "./algorithms/InsertionSort";
import selectionSort from "./algorithms/SelectionSort";
import mergeSort from "./algorithms/MergeSort";
import quickSort from "./algorithms/QuickSort";
import heapSort from "./algorithms/HeapSort";
import radixSort from "./algorithms/RadixSort";
import bubbleSort from "./algorithms/BubbleSort";

export function createArray(length) {
  let newArr = [];
  for (let i = 0; i < length; i++) {
    newArr.push({
      value: Math.floor(Math.random() * (window.innerHeight / 4 - 30 + 1)) + 30,
      id: "id-" + i,
    });
  }
  return newArr;
}

export function sortArray(arr, method, speed, setArr) {
  let results = [];
  if (method === "SelectionSort") results = selectionSort(arr);
  else if (method === "MergeSort") results = mergeSort(arr);
  else if (method === "QuickSort") results = quickSort(arr);
  else if (method === "InsertionSort") results = insertionSort(arr);
  else if (method === "HeapSort") results = heapSort(arr);
  else if (method === "RadixSort") results = radixSort(arr);
  else if (method === "BubbleSort") results = bubbleSort(arr);

  results.forEach((result, index) => {
    setTimeout(() => {
      setArr((prevArr) => {
        // Create a new array reference to ensure React detects the change
        return [...result];
      });
    }, speed * index);
  });
}
