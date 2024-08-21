function selectionSort(arr) {
  const result = [];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j].value < arr[minIdx].value) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      arr[i].style = arr[minIdx].style = "bar-swap";
      result.push(JSON.parse(JSON.stringify(arr)));
    }
  }
  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));

  return result;
}

export default selectionSort;
