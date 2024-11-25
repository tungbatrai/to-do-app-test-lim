// import addItem from "../app/services/addItem";
// import ControlActionClass from "../app/services/controlAction";

// describe("ControlAction", () => {
//   let array;

//   beforeEach(() => {
//     array = [
//       { data: "Hello", type: true },
//       { data: "World", type: false },
//     ];
//   });

//   //   test("Lấy các phần tử chưa bị xóa (type = true)", () => {
//   //     const result = ControlActionClass.showActiveItem(array);
//   //     expect(result).toEqual([{ data: "Hello", type: true }]);
//   //   });

//   //   test("Lấy các phần tử đã bị xóa (type = false)", () => {
//   //     const result = ControlActionClass.showDeleteItem(array);
//   //     expect(result).toEqual([{ data: "World", type: false }]);
//   //   });

//   test("them pt", () => {
//     const result = ControlActionClass.getAddItem(array, "Hello");
//     expect(result).toEqual([{ data: "World", type: false }]);
//   });
// });
