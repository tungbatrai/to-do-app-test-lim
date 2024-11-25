export default function addItem(array, input) {
  if (typeof input !== "string") {
    throw Error("Dữ liệu nhập vào phải là chuỗi");
  }

  const trimmedInput = input.trim();

  if (!trimmedInput) {
    throw Error("Chuỗi nhập vào không hợp lệ");
  }

  if (array.some((entry) => entry.data === trimmedInput)) {
    throw Error("Bạn vừa nhập trùng");
  }

  array.push({ data: trimmedInput, type: true });
  return array;
}
