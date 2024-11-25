import addItem from "./services/addItem";
import deleteItem from "./services/deleteItem";

export default menuControl = (arr, item, type) => {
  switch (type) {
    case "add":
      return addItem(arr, item);
    case "del":
      return deleteItem(arr, item);

    default:
      throw Error("Nhập sai định dạng");
  }
};
