//bài tập 1//
let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i)
};
console.log(arr[0] + [arr.length - 1]);


//bài tập 2//

for (let i = 2; i <= 9; i++) {
    for (let a = 1; a <= 10; a++) {
        console.log(`${i} * ${a} = ${i * a}`);
    }
};


//bài tập 3//
let arr3 = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    arr3.push(i)
};

//bài tập 4//
let arr4 = [];
for (let i = 1; i <= 10; i++) {
    console.log("user" + i + "@example.com")
};

//bài tập 5//
let jan = {
    month: 1,
    total: 123,
};
let feb = {
    month: 2,
    total: 123,
};
let march = {
    month: 3,
    total: 123,
};
let april = {
    month: 4,
    total: 123,
};
let may = {
    month: 5,
    total: 123,
};
let june = {
    month: 6,
    total: 123,
};
let july = {
    month: 7,
    total: 123,
};
let aug = {
    month: 8,
    total: 123,
};
let sep = {
    month: 9,
    total: 123,
};
let oct = {
    month: 10,
    total: 123,
};
let nov = {
    month: 11,
    total: 123,
};
let dec = {
    month: 12,
    total: 123,
};
let revenueYear = [[jan], [feb], [march], [april], [may], [june], [july], [aug], [sep], [oct], [nov], [dec]];
console.log(revenueYear);
