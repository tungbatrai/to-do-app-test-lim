export default function deleteItem(array, input) {
  if (typeof input !== "string") {
    throw Error("Dữ liệu nhập vào phải là chuỗi");
  }

  const trimmedInput = input.trim();

  if (!trimmedInput) {
    throw Error("Chuỗi nhập vào không hợp lệ");
  }

  const hasMatchingItem = array.some((entry) => entry.data === trimmedInput);
  if (!hasMatchingItem) {
    throw Error("Không tìm thấy phần tử cần xóa");
  }

  const updatedArray = array.map((entry) =>
    entry.data === trimmedInput ? { ...entry, type: false } : entry
  );
  return updatedArray;
}
