// //Create a conditonal that checks their age
// let age = 41
// //If under 16, tell them they can not drive
// if(age < 16) {
//     console.log('they can not drive')
// //If under 18, tell them they can't hate from outside the club, because they can't even get in
// } else if(age < 18) {
//     console.log('they can\'t hate from outside the club, because they can\'t even get in')
// //If under 21, tell them they can not drink
// } else if(age < 21) {
//     console.log('they can not drink')
// //If under 25, tell them they can not rent cars affordably
// } else if(age < 25) {
//     console.log('they can not rent cars affordably')
// //If under 30, tell them they can not rent fancy cars affordably
// } else if(age < 30) {
//     console.log('they can not rent fancy cars affordably')
// //If over 30, tell them there is nothing left to look forward too
// } else if (age > 30) {
//     console.log('there is nothing left to look forward too, which is a lie - 100devs')
// }

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph


document.querySelector('#check').addEventListener('click', checkAge)

function checkAge() {
   
let age = document.querySelector('#danceDanceRevolution').value

if(age < 16) {
    console.log('they can not drive')
    document.querySelector('p').innerText = 'they can not drive'
} else if(age < 18) {
    console.log('they can\'t hate from outside the club, because they can\'t even get in')
    document.querySelector('p').innerText = 'they can\'t hate from outside the club, because they can\'t even get in'
} else if(age < 21) {
    console.log('they can not drink')
    document.querySelector('p').innerText = 'they can not drink'
} else if(age < 25) {
    console.log('they can not rent cars affordably')
    document.querySelector('p').innerText = 'they can not rent cars affordably'
} else if(age < 30) {
    console.log('they can not rent fancy cars affordably')
    document.querySelector('p').innerText = 'they can not rent fancy cars affordably'
} else if (age > 30) {
    console.log('there is nothing left to look forward too, which is a lie - 100devs')
    document.querySelector('p').innerText = 'there is nothing left to look forward too, which is a lie - 100devs'
}
    
}
