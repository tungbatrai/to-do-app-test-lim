import AddToTable from './AddToTable.js';
import DeleteFromTable from './DeleteFromTable.js';

export default class TableManager {
  constructor() {
    this.table = [];
    this.deleteTable = [];
  }

  AddItem(item) {
    this.table = AddToTable(this.table, item);
  }

  DeleteItem(item) {
    const result = DeleteFromTable(this.table, this.deleteTable, item);
    this.table = result.updatedTable;
    this.deleteTable = result.updatedDeleteTable;
  }
}
