let array=[12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function bubble(array){
  for (let j=array.length-1; j>0; j--){
    for (let i=0; i<j; i++){
      if (array[i]>array[i+1]){
        let param = array[i];
        array[i] = array[i+1];
        array[i+1]= param
      }
    }
  }
}

bubble(array)
console.log(array)