export default function AddToTable(table, item) {
  const trimmedItem = item.trim(); // Xóa khoảng trắng thừa
  
  if (!trimmedItem) {
    throw new Error('Bạn chưa nhập gì');
  }

  if (table.some((entry) => entry.value === trimmedItem)) {
    throw new Error('Bạn vừa nhập trùng');
  }

  return [...table, { value: trimmedItem, show: true }];
}