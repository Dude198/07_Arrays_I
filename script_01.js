"use strict";

/* Die Satzbau-Maschine | Arrays */

/***02. Theorie: Array */

// let arr;
// // arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,7,11,4];
// arr = [false,true,false];
// arr = ["Ich","bin","Max","Mütze"];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1.Pos. im Array)
// output(arr[3]);
// output(arr[arr.length-1]); // allgemein

// ()-----> Parameter, Tests
// {}-----> Codeblöcke
// []-----> Arrays, Index

/* 02a. Theorie: Schleifen (for-Schleife)*/

/* For-Schleifen als allg.Wiederholungsstruktur */
// Inkrement (untere Grenze-->oberen Grenze)
// for (let i = 0; i < 100; i++)
// {
//     output("index i:" + i);
// }

// Dekrement (obere Grenze--> untere Grenze)
// for (let i = 10; i > 0; i--)
// {
//     output("index i:" + i);
// }
// Inkrement (var. Schrittweite)
// for (let i = 0; i <= 100; i+=10) {
//     output("index i: " + i);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++) {
    output(arr [i]); // i als Index des Arrays
}


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","der","coole","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {

    const gap   = " ";
    const punct = ".";
    let str     =   word1 + gap +
                    word2 + gap +
                    word3 + gap +
                    word4 + gap +
                    word5 + gap +
                    word6 + punct;

    return str;   
}


/**** 01a Funktionalität mit Array 1 */

// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {

    const gap   = " ";
    const punct = ".";
    let str     =   arr[0] + gap +
                    arr[1] + gap +
                    arr[2] + gap +
                    arr[3] + gap +
                    arr[4] + gap +
                    arr[5] + punct;

    return str;   
}






// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


