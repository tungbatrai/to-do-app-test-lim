import deleteItem from "../app/services/deleteItem";

describe("DeleteItem", () => {
  let array;

  beforeEach(() => {
    array = [{ data: "Hello", type: true }];
  });

  test("Xóa phần tử (type = false)", () => {
    const result = deleteItem(array, "Hello");
    expect(result).toEqual([{ data: "Hello", type: false }]);
  });

  test("Không ảnh hưởng đến phần tử không liên quan", () => {
    array.push({ data: "World", type: true });
    const result = deleteItem(array, "Hello");
    expect(result).toEqual([
      { data: "Hello", type: false },
      { data: "World", type: true },
    ]);
  });
});
