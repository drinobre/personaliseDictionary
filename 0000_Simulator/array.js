// Task 5 Looping and Reassigning (1811_javaArrays)

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

// Study 1 Store in a new variable - I can't call newWords outside the for loop beacause the variable only exist inside the loop 

for (let i = 0; i < words.length; i++) {
    let newWords = words[i] + "t1";
    console.log(newWords);    
}

// Study 2 console log the results and the results wouldn't affect the variable "words"

for (let i = 0; i < words.length; i++) {
    console.log(words[i] + "t2");  
}

