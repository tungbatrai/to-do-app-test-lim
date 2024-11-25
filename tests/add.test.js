import addItem from "../app/services/addItem";

describe("test tất cả", () => {
  let array;

  beforeEach(() => {
    array = [{ data: "Hello", type: true }];
  });

  test("Thêm phần tử mới", () => {
    addItem(array, "World");
    expect(array).toEqual([
      { data: "Hello", type: true },
      { data: "World", type: true },
    ]);
  });

  test("Thêm phần tử trùng", () => {
    expect(() => addItem(array, "Hello")).toThrow("Chuỗi đã tồn tại");
  });
});
