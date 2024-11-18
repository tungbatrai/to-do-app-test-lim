export class ToDo {
    constructor() {
        this.arrayA = [];
        this.arrayB = [];
    }

    // Thêm task vào mảng A
    addTask(task) {
        if (!task || typeof task !== 'string') {
            throw new Error('Task phải là chuỗi không rỗng');
        }
        this.arrayA.push(task);
    }

    // Xóa task khỏi mảng A và chuyển vào mảng B
    deleteTask(task) {
        const index = this.arrayA.indexOf(task);
        if (index === -1) {
            throw new Error('Task không tồn tại trong mảng A');
        }
        this.arrayA.splice(index, 1); // Xóa task khỏi mảng A
        this.arrayB.push(task);      // Thêm task vào mảng B
    }

    // Lấy danh sách từ mảng A
    getArrayA() {
        return this.arrayA;
    }

    // Lấy danh sách từ mảng B
    getArrayB() {
        return this.arrayB;
    }
}
