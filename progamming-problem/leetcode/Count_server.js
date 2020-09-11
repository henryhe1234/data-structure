var countServers = function (grid) {
  let array = [];
  let count = 0;
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        array.push([i, j]);

      }

    }
  }
  // console.log(array);
  let answer=[];
  array.forEach(([x,y])=>{
    let elements = array.filter(pair =>pair[0] === x || pair[1] === y);
    if(elements.length >1) answer.push(elements);
  });
  console.log(answer);


    return answer.length;
};
console.log(countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));
// console.log(countServers([[1,0],[1,1]]));
