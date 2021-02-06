var num=[3,3,2,2,4,5,6,7,8,8,9];
var emptArray=[];
for(i=0;i<num.length;i++){
    var element=num[i];
    var index=emptArray.indexOf(element);

    if(index==-1){
        emptArray.push(element);
    }
}

console.log(emptArray);