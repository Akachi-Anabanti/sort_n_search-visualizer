function radixSort(arr) {
  const result = [];
  const getMax = (arr) => Math.max(...arr.map((item) => item.value));

  function countSort(exp) {
    const output = new Array(arr.length).fill(null);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      count[Math.floor(arr[i].value / exp) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i].value / exp) % 10;
      output[count[index] - 1] = { ...arr[i], style: "bar-swap" };
      count[index]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }

    result.push(JSON.parse(JSON.stringify(arr)));
  }

  const max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(exp);
  }

  arr.forEach((element) => (element.style = "bar-sorted"));
  result.push(JSON.parse(JSON.stringify(arr)));
  return result;
}
export default radixSort;
