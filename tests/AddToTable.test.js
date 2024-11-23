import AddToTable from '../app/services/AddToTable.js';

describe('AddToTable', () => {
  test('Thêm phần tử mới vào bảng', () => {
    const table = [];
    const result = AddToTable(table, 'Item1');
    expect(result).toEqual([{ value: 'Item1', show: true }]);
  });

  test('Không thêm phần tử trùng lặp', () => {
    const table = [{ value: 'Item1', show: true }];
    const result = AddToTable(table, 'Item1');
    expect(result).toEqual(table);
  });

  test('Không thêm phần tử rỗng hoặc khoảng trắng', () => {
    const table = [{ value: 'Item1', show: true }];
    const result = AddToTable(table, '   ');
    expect(result).toEqual(table);
  });
});
