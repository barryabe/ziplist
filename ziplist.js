let test1 = [1,2,3];
let test2 = ['a','b','c'];
function zipList(arr1,arr2){
  if (arr1.length != arr2.length){
    return NULL;
  }
  let nArr = [];
  let n = 0;
  for(let i = 0; i<arr1.length;i++){
    nArr[n] = arr1[i];
    nArr[n+1] =  arr2[i];
    n += 2;
    console.log(n);
  }
  return nArr;
}

console.log(zipList(test1,test2));

function zipListTheSimpleWay(arr1,arr2){
  return _.flatten(_.zip(arr1,arr2));
}

console.log(zipListTheSimpleWay(test1,test2));