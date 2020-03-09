import { findKeyName } from "./helperFunctions";

const key ="https://region.amazonaws.com/bucket-name/titleName.jpg"

test("findKeyName returns name with jpg extension", () => {
  const result = findKeyName(key);
  expect(result).toMatch(/.jpg/);
});

test("findKeyName returns title name with symbol length 13", () => {
  const result = findKeyName(key);
  expect(result.length).toEqual(13);
});

test("findKeyName returns title name equal titleName.jpg", () => {
  const result = findKeyName(key);
  expect(result).toEqual('titleName.jpg');
});
