import menuControl from "../app/controlMenu";
describe("menuControl", () => {
  let table;

  beforeEach(() => {
    table = [{ data: "Item1", type: true }];
  });

  test("Thêm phần tử hợp lệ vào bảng", () => {
    const result = menuControl(table, "Item2", "add");
    expect(result).toEqual([
      { data: "Item1", type: true },
      { data: "Item2", type: true },
    ]);
  });

  test("Không thêm phần tử rỗng", () => {
    expect(() => menuControl(table, "   ", "add")).toThrow(
      "Chuỗi nhập vào không hợp lệ"
    );
  });

  test("Không thêm phần tử trùng", () => {
    expect(() => menuControl(table, "Item1", "add")).toThrow(
      "Bạn vừa nhập trùng"
    );
  });

  test("Xóa phần tử hợp lệ khỏi bảng", () => {
    const result = menuControl(table, "Item1", "del");
    const tableShow = result.filter((e) => e.type == true);
    expect(tableShow).toEqual([]);
  });

  test("Không xóa phần tử không tồn tại", () => {
    expect(() => menuControl(table, "Item2", "del")).toThrow(
      "Không tìm thấy phần tử cần xóa"
    );
  });

  test("Ném lỗi khi nhập sai định dạng hành động", () => {
    expect(() => menuControl(table, "Item1", "invalid")).toThrow(
      "Nhập sai định dạng"
    );
  });
});
