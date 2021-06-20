var Prima = (n) =>{
  var arr = []
  var val = 2
  arr.push(val)
  while(arr.length < n){
    val++
    var bilPrima = true
    for(var i = 0; i < arr.length; i++){
      if(val % arr[i] === 0){
        bilPrima = false
        break;
      }
    }

    if(bilPrima){
      arr.push(val)
    }
  }

  console.log(arr)
}

Prima(10)
