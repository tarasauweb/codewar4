function narcissistic(value) {
    let myNum = new String(value)
    let sumAllNum = ''
    let arr = []
    for(let i = 0 ; i<myNum.length ; i++) {
        arr.push(myNum[i])
    }
    arr = arr.map(item =>{
        return item = Math.pow(item , arr.length)
    })
    sumAllNum = arr.reduce ( (sum , item)=>{
        return sum + item
    })
    if(value == sumAllNum){
        console.log(true)
        return true
    }
    else{
        console.log(false)
        return false
    }
   
  }
  

  narcissistic(153)