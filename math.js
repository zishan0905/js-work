// let b =Math.floor(4.9)
// console.log(b)

// let b =Math.ceil(4.9)
// console.log(b)


function no (nums){
    let n=0
    for(let i = 0;i < nums.length;i+=1){
        n+=nums[i]
    }
    console.log(n/nums.length)
}
no(3,45,56,67)