export const filterTasks = (arr) => {
  const parsedData = {};
  arr.forEach(({data, _id,  status}) => {
    const parsedDataStatus = parsedData[status]
    const dataToAdd = { data, _id }
    if (parsedDataStatus) return parsedData[status].push(dataToAdd)
    parsedData[status] = [dataToAdd]
  });
  return parsedData
}