import deleteItem from "../app/services/deleteItem"; // Thay bằng đường dẫn đúng

describe("Kiểm tra deleteItem", () => {
  let array;

  beforeEach(() => {
    array = [
      { data: "Hello", type: true },
      { data: "World", type: true },
    ];
  });

  test("Xóa phần tử hợp lệ", () => {
    const updatedArray = deleteItem(array, "Hello");
    expect(updatedArray).toEqual([
      { data: "Hello", type: false },
      { data: "World", type: true },
    ]);
  });

  test("Xóa phần tử không tồn tại", () => {
    expect(() => deleteItem(array, "NotExist")).toThrow(
      "Không tìm thấy phần tử cần xóa"
    );
  });

  test("Xóa với chuỗi rỗng hoặc chỉ chứa khoảng trắng", () => {
    expect(() => deleteItem(array, "")).toThrow("Chuỗi nhập vào không hợp lệ");
    expect(() => deleteItem(array, "   ")).toThrow(
      "Chuỗi nhập vào không hợp lệ"
    );
  });

  test("Xóa với dữ liệu không phải chuỗi", () => {
    expect(() => deleteItem(array, 123)).toThrow(
      "Dữ liệu nhập vào phải là chuỗi"
    );
    expect(() => deleteItem(array, null)).toThrow(
      "Dữ liệu nhập vào phải là chuỗi"
    );
  });
});
