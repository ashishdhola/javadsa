let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=6;
for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr.length; j++){
        if(arr[i]+arr[j]===sum){
            console.log(`The sum of ${sum} is from element ${arr[i]} and ${arr[j]} at indices ${i} ans ${j}`);
        }
    }
}
