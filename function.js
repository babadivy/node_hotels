/*function myFunction(){
    console.log('ka ho'),
    console.log('ka hota');
}
myFunction();
function myFunction(msg){//input type
    console.log(msg);
}
myFunction("hello");*/
/*function sum(a,b){
    s= a+b;
    return s;
}
let val=sum(22,34);
console.log(val);
//ARROW FUNCTION
const arrowSum=(a,b)=>{
    console.log(a+b);
};*/
function countVovel(str){
    let count =0
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;

        }
        
}
console.log(count);
}
