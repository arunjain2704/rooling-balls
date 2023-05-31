console.log("nh");

let arr=[1,2,1,2,1,2,1];
console.log(arr);
let i=0,j=6,c=0;
// while(i<j){
   
    while(i<j)
{

if(arr[i]==arr[j])
{
   c++;
   i++;
   j--;
}
else{
     
     c=0;
     j--;
}


}
c=c*2+1;
console.log(c);
c=0;