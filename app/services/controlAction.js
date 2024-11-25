import addItem from "./addItem";

export default class ControlActionClass {
  static showActiveItem(array) {
    return array.filter((entry) => entry.type === true);
  }

  static showDeleteItem(array) {
    return array.filter((entry) => entry.type === false);
  }

  static getAddItem(array) {
    return addItem(array);
  }
  static getDeleteItem(array) {
    return array;
  }
}
