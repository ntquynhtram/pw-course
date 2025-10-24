//bài tập 1//
let car = {
    make: "toyota",
    model: "corolla",
    year: 2021
};
console.log(car.year);

//bài tập 2//
let person = {
    name: "Tracy",
    address: {
        street: "B6",
        city: "Nha Trang",
        country: "Viet Nam"
    },
};
console.log(person.address.street);

//bài tập 3//
let student = {
    name: "Tracy",
    grades: {
        math: 8,
        english: 9,
    },
};
console.log(student['grades']['math']);

//bài tập 4//
let settings = {
    volume: 5,
    brightness: "max",
};
settings.volume = 6;
console.log(settings.volume);

//bài tập 5//
let bike = {
    model: "AB",
    year: 2021,
};
bike['color'] = "black";
console.log(bike.color);

//bài tập 6//
let employee = {
    name: "Tracy",
    age: 27,
};
delete employee.age;

//bài tập 7/.
const school = {
    classA: ['An', 'Bình', 'Châu'],
    classB: ['Đào', 'Hương', 'Giang'],
};
console.log(school);