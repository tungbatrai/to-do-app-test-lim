export default deleteItem = (array, input) => {
  const updatedArray = array.map((entry) =>
    entry.data === input ? { ...entry, type: false } : entry
  );
  return updatedArray;
};
