/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board){
  board.forEach((array)=>{
    array.forEach((subs,k)=>{
      array[k] = subs==='.'?0:subs*1
    })
  })
  let stackSize = 0;
  const state = [];
  recursion(0,0,1);
  console.log(board)
  board.forEach((array)=>{
    array.forEach((subs,k)=>{
      array[k] = subs+''
    })
  })
  function recursion(row,column,value) {
    stackSize += 1;
    if(value>9){
      preProcess();
      return;
    }
    for (let i = row; i < 9; i++) {
      for (let j = column; j < 9; j++) {
        if (!board[i][j]) {
          for (let k = value; k < 10; k++) {
            if (check([i, j], k)) {
              // console.log([i, j, k])
              state.push([i, j, k])
              board[i][j] = k;
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
    console.log(board);
  }
  function preProcess(){
    if (!state.length){console.error("Please check sudoku!"); return;}
    let lastStep = state.pop();
    lastStep[2] += 1;
    board[lastStep[0]][lastStep[1]] = 0;
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
    return board[rowNo];
  }

  function getColumnData(columnNo) {
    const columnData = [];
    board.forEach((rowData) => {
      columnData.push(rowData[columnNo]);
    })
    return columnData;
  }

  function getSquareData(coordinate) {
    const rowNo = Math.floor(coordinate[0] / 3);
    const columnNo = Math.floor(coordinate[1] / 3);
    const squareData = [];
    [0, 1, 2].forEach((offset) => {
      const temp = board[rowNo * 3 + offset].slice(columnNo * 3, columnNo * 3 + 3);
      squareData.push(...temp)
    })
    return squareData;
  }
}

// @lc code=end

