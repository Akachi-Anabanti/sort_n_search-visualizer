function insertionSort(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].value > key.value) {
      arr[j + 1] = arr[j];
      arr[j + 1].style = "bar-swap";
      j--;
      result.push(JSON.parse(JSON.stringify(arr)));
    }

    arr[j + 1] = key;
    arr[j + 1].style = "bar-swap";
    result.push(JSON.parse(JSON.stringify(arr)));
  }

  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));
  return result;
}
export default insertionSort;
