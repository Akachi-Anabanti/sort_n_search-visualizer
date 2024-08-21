function BubbleSort(arr) {
  const result = [];
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        arr[j].style = arr[j + 1].style = "bar-swap";
        result.push(JSON.parse(JSON.stringify(arr)));
      }
    }
  }
  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));
  return result;
}

export default BubbleSort;
