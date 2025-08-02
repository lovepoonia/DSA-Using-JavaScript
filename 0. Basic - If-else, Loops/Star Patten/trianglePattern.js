 //* 
 //* *
 //* * *
 //* * * *

for (let i = 0; i < 5; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row = row + "* ";
    }
    console.log(row)
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + " " + j;
    }
    console.log(row)
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + " " + i;
    }
    console.log(row)
}

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1

for (let i =5; i >= 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + " " + j;
    }
    console.log(row)
}

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *

for (let i =1; i <= 5; i++) {
    let row = "";
    for (let j = i; j <= 5-1; j++) {
        row = row + "  ";
    }
    for (let k = 1; k <= i; k++) {
        row = row + " *";
    }
    console.log(row)
}

//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1

for (let i =1; i <= 5; i++) {
    let row = "";
    let a = 1;
    for (let j = 1; j <= i; j++) {
        row = row + " "+ a;
        if (a == 1) {
            a=0
        } else {
            a = 1
        }
    }
    console.log(row)
}

//  1
//  0 1
//  0 1 0
//  1 0 1 0
//  1 0 1 0 1

let a = 1;
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + " "+ a;
        if (a == 1) {
            a=0
        } else {
            a = 1
        }
    }
    console.log(row)
}