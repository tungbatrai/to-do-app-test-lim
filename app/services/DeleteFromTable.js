export default function DeleteFromTable(table, deleteTable, item) {
    const updatedTable = table.filter((entry) => entry.value !== item); // Loại khỏi table
    const updatedDeleteTable = [...deleteTable, { value: item, show: false }]; // Đưa vào deleteTable
    return { updatedTable, updatedDeleteTable };
  }
  