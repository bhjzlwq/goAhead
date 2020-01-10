// const sudoku = [
//   [0,0,0,7,0,8,0,2,0],
//   [8,0,3,0,0,0,0,0,0],
//   [0,0,0,0,0,6,0,0,0],
//   [9,4,1,2,6,3,7,0,5],
//   [3,2,0,0,0,0,0,1,4],
//   [5,8,0,0,0,9,0,0,0],
//   [2,7,9,1,0,4,5,6,0],
//   [0,3,8,5,9,7,1,0,2],
//   [4,1,0,6,8,0,3,7,9]
// ];
// const sudoku = [
//   [2,0,0,0,0,8,9,5,0],
//   [0,0,0,0,0,3,4,0,0],
//   [6,9,0,4,0,0,8,0,0],
//   [0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,4,2,0,0,8],
//   [0,7,0,6,0,5,0,0,0],
//   [0,0,7,0,8,0,0,9,4],
//   [0,0,1,0,0,9,0,0,0],
//   [9,0,5,0,0,4,0,6,2],
// ];
// const sudoku = [
//   [0, 0, 0, 2, 0, 0, 0, 0, 9],
//   [0, 0, 8, 0, 5, 0, 0, 1, 0],
//   [5, 6, 0, 9, 0, 0, 4, 0, 0],
//   [0, 0, 2, 0, 0, 0, 9, 0, 0],
//   [0, 0, 0, 5, 0, 0, 0, 0, 3],
//   [0, 7, 0, 0, 0, 8, 0, 0, 0],
//   [7, 0, 0, 0, 6, 0, 1, 9, 4],
//   [0, 4, 0, 0, 0, 5, 0, 0, 0],
//   [0, 0, 6, 0, 0, 1, 0, 8, 7],
// ];
const sudoku = [
  [2, 0, 0, 0, 9, 3, 5, 0, 7],
  [0, 0, 0, 0, 0, 0, 9, 8, 0],
  [5, 0, 4, 0, 0, 2, 3, 0, 0],
  [0, 0, 7, 0, 0, 0, 0, 9, 6],
  [1, 0, 9, 0, 3, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 0],
  [9, 7, 0, 0, 0, 0, 6, 0, 0],
  [0, 0, 2, 0, 0, 8, 0, 0, 0],
];
resolveSudoku(sudoku);
// console.log(sudoku);
function resolveSudoku(arr){
  let stackSize = 0;
  const state = [];
  recursion(0,0,1);
  function recursion(row,column,value) {
    stackSize += 1;
    if(value>9){
      preProcess();
      return;
    }
    for (let i = row; i < 9; i++) {
      for (let j = column; j < 9; j++) {
        if (!arr[i][j]) {
          for (let k = value; k < 10; k++) {
            if (check([i, j], k)) {
              // console.log([i, j, k])
              state.push([i, j, k])
              arr[i][j] = k;
              value = 1;
              break;
            }
            if (k === 9) {
              preProcess();
              return;
            }
          }
        }
      }
      column = 0;
    }
    console.log(arr);
  }
  function preProcess(){
    if (!state.length){console.error("Please check sudoku!"); return;}
    let lastStep = state.pop();
    lastStep[2] += 1;
    arr[lastStep[0]][lastStep[1]] = 0;
    if (stackSize == 1000) {
      stackSize = 0;
      setTimeout(() => {
        recursion(...lastStep);
      }, 0);
    } else {
      recursion(...lastStep);
    }
  }
  function check(coordinate, value) {
    return rowCheck(coordinate[0], value) && columnCheck(coordinate[1], value) && squareCheck(coordinate, value);
  }

  function rowCheck(rowNo, value) {
    const data = getRowData(rowNo);
    return !data.includes(value)
  }
  function columnCheck(rowNo, value) {
    const data = getColumnData(rowNo);
    return !data.includes(value)
  }
  function squareCheck(coordinate, value) {
    const data = getSquareData(coordinate);
    return !data.includes(value)
  }

  function getRowData(rowNo) {
    return arr[rowNo];
  }

  function getColumnData(columnNo) {
    const columnData = [];
    arr.forEach((rowData) => {
      columnData.push(rowData[columnNo]);
    })
    return columnData;
  }

  function getSquareData(coordinate) {
    const rowNo = Math.floor(coordinate[0] / 3);
    const columnNo = Math.floor(coordinate[1] / 3);
    const squareData = [];
    [0, 1, 2].forEach((offset) => {
      const temp = arr[rowNo * 3 + offset].slice(columnNo * 3, columnNo * 3 + 3);
      squareData.push(...temp)
    })
    return squareData;
  }
}


