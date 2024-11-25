import addItem from "./services/addItem";
import deleteItem from "./services/deleteItem";

export default action = (arr, item, type) => {
  switch (type) {
    case "add":
      return addItem(arr, item);
    case "del":
      return deleteItem(arr, item);

    default:
      throw Error("nhap sai dinh dang");
  }
};
