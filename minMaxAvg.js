var arr=[1,-2,9,4]
var min=arr[0] 
var max=arr[0] 
var avg=0
function maxMinAvg(){
    for(i=0; i<arr.length;i++){
        if (min<arr[i]){
            min=arr[i]
        }
        if(max>arr[i]){
            max=arr[i]
        }
        avg+=arr[i]
    }
    avg/=arr.length
    return [min,max,avg]
}
reslts= maxMinAvg(arr);
console.log(reslts)
       
