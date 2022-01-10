let var1 = 1;

// Case 1
function testing (var2){
    var1 = var2
}




// Case 2
function testing (var2){
    var1 = var2
    return var2;
}


// 
function test(int, strings, arrays, objects, functionThing){
    console.log(int)
    console.log(strings)
    console.log(arrays)
    console.log(objects)
    console.log(functionThing)
}

test(2, "adriana", [1,2,3], {name:"adriana"}, function(say) {console.log(say)})


//callback
function callBackTest (callback) {
    return callback();
}

function FirstName(){
    return "Adriana";
}

callBackTest(FirstName);

