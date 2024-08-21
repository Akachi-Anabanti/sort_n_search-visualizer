function quickSort(arr) {
  const result = [];

  function partition(low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j].value < pivot.value) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        arr[i].style = arr[j].style = "bar-swap";
        result.push(JSON.parse(JSON.stringify(arr)));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    arr[i + 1].style = arr[high].style = "bar-swap";
    result.push(JSON.parse(JSON.stringify(arr)));
    return i + 1;
  }

  function sort(low, high) {
    if (low < high) {
      const pi = partition(low, high);
      sort(low, pi - 1);
      sort(pi + 1, high);
    }
  }

  sort(0, arr.length - 1);
  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));
  return result;
}

export default quickSort;
