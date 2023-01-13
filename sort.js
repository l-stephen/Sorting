let numbers = [0,1,2,3,9,8,40,15,10,20,30];
let animals = [
    'Cat', 'dog', 'elephant', 'Bee', 'ant', "anteater"
];
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

/*employees.sort(function (x,y){
    return x.salary - y.salary;
})*/

/*employees.sort(function (x,y){
    let a = x.name.toUpperCase();
    let b = y.name.toUpperCase();
    //return a.localeCompare(b);
    //return a == b ? 0 : a > b ? 1 : -1;
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;


})*/
employees.sort(function (x,y){
    let a = new Date(x.hireDate);
    let b = new Date(y.hireDate);
    return a - b;
})
console.log(employees);
const filtered = employees.filter(word => word.name.length > 4)
console.log(filtered);
/*numbers.sort(function (a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});*/
/*numbers.sort(function ())parseInt(numbers.sort(function (a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}))*/
numbers.sort((a,b)=> {return b-a})
console.log(numbers);
/*animals.sort(function (a,b){

    let x = a.toUpperCase()
    let y = b.toUpperCase()

    if(x > y) return 1;
    if(x < y) return -1;
    return 0;

    //return x == y ? 0 : x > y ? 1 : -1;
})*/
animals.sort((a,b)=>{
    return a.localeCompare(b);
})
console.log(animals);