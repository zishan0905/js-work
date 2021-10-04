// fourth question



// function tanker(ghara,Xmug,Ymug){
//     let a =ghara%Xmug
//     let b =ghara%Ymug
//     if(a < b){
//         console.log(a+" "+"Xmug")
//     }else if(a > b){
//         console.log(b+" "+"Ymug")
//     }
//     if(a===b){
//         if(Xmug >= Ymug){
//             console.log("Xmug")
//         }else if(Ymug >= Xmug){
//             console.log("Ymug")
//         }
//     }
// }
// tanker(100,10,20)                  





// // first question

// // let row=7
// // let x =5
// // for(let i = 0;i < row;i++){
// //     let str= ""
// //     for(let j = 0;j <=x-i;j++){
// //         str+=" "
// //     }for(let j =0;j < 1+i;j++){
// //         str+=" "+"*"
// //     }
// //     console.log(str)
// // }



// //second question

// // let row=4
// // let x = 2
// // let col=1
// // for(let i =0;i < row;i++){
// //     let str=""
// //     for(let j = 0;j <=x-i;j++){
// //         str+=" "
// //     }
// //     for(let j =0;j <col+i;j++){
// //         str+=" "+"*"
// //     }
// //     console.log(str) 
// // }
// // let r = 3
// // let c = 2
// // for(let i =0; i <r;i++){
// //     let str1=""
// //     for(let j =0;j <=0+i;j++){
// //         str1+=" "
// //     }
// // for(let m =0;m <=c-i;m++){
// //     str1+=" "+"*"
// // }
// // console.log(str1)
// // }
// let ct=5
// function draw() {
//     ctx.clearRect(0,0,WIDTH,HEIGHT);
//     for (let i = 0; i < 100; i++) {
//       ctx.beginPath();
//       ctx.fillStyle = 'rgba(255,0,0,0.5)';
//       ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//       ctx.fill();
//     }
//   }

// document.querySelector("button").onclick=draw

// function abbrevName(name){
//   for(let i = 0;i < name.length;i++){
//     if(name[i]==" "){
//       return (name[0]+(name[i])
//     }
//   }
// }
  

  function countPositivesSumNegatives(arr) {
 let counts=0
 let sum =0
 for(let i =0;i <arr.length;i++){
   if(arr[i]>0){
     count+=1
   }else if(arr[i]  < 0){
     sum+=arr[i]
   }
 }
}
console.log(counts,sum)
countPositivesSumNegatives([12,34,56,-100])