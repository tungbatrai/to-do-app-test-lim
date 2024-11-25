import action from "./../app/controlMenu";

describe("tổng hợp", () => {
  let array;

  beforeEach(() => {
    array = [];
  });

  test("Thêm phần tử mới", () => {
    action(array, "Hello", "add");
    expect(array).toEqual([{ data: "Hello", type: true }]);
  });

  test("Thêm phần tử trùng", () => {
    action(array, "Hello", "add");
    action(array, "Hello", "add").toThrow();
    // expect(array).toEqual([{ data: "Hello", type: true }]);
  });
});
