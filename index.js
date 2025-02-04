function secondLargest(data) {
  if (data.length <= 1) return null;
  if (data.every((v) => v === data[0])) return null;
  return data.sort((a, b) => a - b).slice(-2)[0];
}

// Тестовые данные
// console.log(secondLargest([10, 20, 4, 45, 99])); // 45
// console.log(secondLargest([5, 5, 5])); // null
// console.log(secondLargest([1])); // null
// console.log(secondLargest([1, 2, 2, 3])); // 2 (handles duplicates correctly)
// console.log(secondLargest([-10, -5, -2, -1])); // -2 (handles negatives correctly)
