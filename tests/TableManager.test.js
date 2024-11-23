import TableManager from '../app/services/TableManager';

describe('TableManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TableManager();
  });

  test('Thêm phần tử vào bảng', () => {
    manager.AddItem('Item1');
  
    expect(manager.table).toEqual([{ value: 'Item1', show: true }]);
    console.log('table sau khi thêm :', manager.table);
  });

  test('Không thêm phần tử trùng hoặc rỗng', () => {
    manager.AddItem('Item1');
    manager.AddItem('Item1'); // Trùng
    console.log('table sau khi check trùng :', manager.table);
    manager.AddItem('   ');  // Rỗng
    expect(manager.table).toEqual([{ value: 'Item1', show: true }]);
  });

  test('Xóa phần tử khỏi bảng và thêm vào deleteTable', () => {
    manager.AddItem('Item1');
    manager.DeleteItem('Item1');
    expect(manager.table).toEqual([]); // Table rỗng
    expect(manager.deleteTable).toEqual([{ value: 'Item1', show: false }]); // Trong deleteTable
    console.log('table sau khi xóa  :', manager.table);
  });
});
