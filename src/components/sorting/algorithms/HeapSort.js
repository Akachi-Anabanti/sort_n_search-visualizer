function heapSort(arr) {
  const result = [];

  function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left].value > arr[largest].value) {
      largest = left;
    }
    if (right < n && arr[right].value > arr[largest].value) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      arr[i].style = arr[largest].style = "bar-swap";
      result.push(JSON.parse(JSON.stringify(arr)));
      heapify(n, largest);
    }
  }

  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    arr[0].style = arr[i].style = "bar-swap";
    result.push(JSON.parse(JSON.stringify(arr)));
  }

  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));
  return result;
}

export default heapSort;
