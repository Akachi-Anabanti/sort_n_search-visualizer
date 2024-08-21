const mergeSort = (arr) => {
  const result = [];

  function sort(left, right) {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      sort(left, mid);
      sort(mid + 1, right);
      merge(left, mid, right);
      result.push(JSON.parse(JSON.stringify(arr)));
    }
  }

  function merge(left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    let [i, j, k] = [0, 0, left];

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i].value <= rightArr[j].value) {
        arr[k] = { ...leftArr[i], style: "bar-swap" };
        i++;
      } else {
        arr[k] = { ...rightArr[j], style: "bar-swap" };
        j++;
      }
      k++;
    }

    while (i < leftArr.length)
      arr[k++] = { ...leftArr[i++], style: "bar-swap" };
    while (j < rightArr.length)
      arr[k++] = { ...rightArr[j++], style: "bar-swap" };
  }

  sort(0, arr.length - 1);
  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));

  return result;
};

export default mergeSort;
