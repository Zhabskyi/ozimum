export const findKeyName = (photo) => {
  const arr = photo.split("");
  const key = [];
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] !== "/") {
      key.unshift(arr[i]);
    } else {
      break;
    }
  }
  return key.join('');
}