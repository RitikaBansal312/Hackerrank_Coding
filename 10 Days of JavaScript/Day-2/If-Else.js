/*
Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade.
*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=30){
        grade='A';
    }
    else if(score>20 && score<=25){
        grade='B';
    }
    else if(score>15 && score<=20){
        grade='C';
    }
    else if(score>10 && score<=15){
        grade='D';
    }
    else if(score>5 && score<=10){
        grade='E';
    }
    else{
        grade='F';
    }
    return grade;
}



function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}