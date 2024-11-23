import DeleteFromTable from '../app/services/DeleteFromTable.js';

describe('DeleteFromTable', () => {
  test('Xóa phần tử khỏi bảng và đưa vào deleteTable', () => {
    const table = [{ value: 'Item1', show: true }];
    const deleteTable = [];
    const { updatedTable, updatedDeleteTable } = DeleteFromTable(table, deleteTable, 'Item1');

    expect(updatedTable).toEqual([]); // Table rỗng
    expect(updatedDeleteTable).toEqual([{ value: 'Item1', show: false }]); // Đưa vào deleteTable
  });

  test('Không xóa phần tử không tồn tại', () => {
    const table = [{ value: 'Item1', show: true }];
    const deleteTable = [];
    const { updatedTable, updatedDeleteTable } = DeleteFromTable(table, deleteTable, 'Item2');

    expect(updatedTable).toEqual(table); // Không thay đổi table
    expect(updatedDeleteTable).toEqual([{ value: 'Item2', show: false }]); // Thêm vào deleteTable
  });
});
