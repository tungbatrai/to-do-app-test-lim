import { ToDo } from '../app/services/todo';

describe('Ứng dụng To-Do', () => {
    let todo;

    // Khởi tạo To-Do mới trước mỗi test
    beforeEach(() => {
        todo = new ToDo();
    });

    test('Thêm task vào mảng A khi nhấn Enter', () => {
        todo.addTask('Mua sữa');
        expect(todo.getArrayA()).toEqual(['Mua sữa']);
    });

    test('Không cho phép thêm task rỗng', () => {
        expect(() => todo.addTask('')).toThrow('Task phải là chuỗi không rỗng');
    });

    test('Xóa task khỏi mảng A và chuyển vào mảng B', () => {
        todo.addTask('Mua sữa');
        todo.addTask('Chạy bộ');
        todo.deleteTask('Mua sữa');

        expect(todo.getArrayA()).toEqual(['Chạy bộ']); // Mảng A còn lại 'Chạy bộ'
        expect(todo.getArrayB()).toEqual(['Mua sữa']); // Mảng B chứa 'Mua sữa'
    });

    test('Báo lỗi khi xóa task không tồn tại', () => {
        expect(() => todo.deleteTask('Task không tồn tại')).toThrow('Task không tồn tại trong mảng A');
    });

    test('Lấy danh sách task từ mảng A', () => {
        todo.addTask('Task 1');
        todo.addTask('Task 2');
        expect(todo.getArrayA()).toEqual(['Task 1', 'Task 2']);
    });

    test('Lấy danh sách task từ mảng B', () => {
        todo.addTask('Task 1');
        todo.deleteTask('Task 1');
        expect(todo.getArrayB()).toEqual(['Task 1']);
    });
});