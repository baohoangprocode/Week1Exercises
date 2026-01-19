const marksweight = 78
const marksheight = 1.69
const johnweight = 92
const johnheight = 1.95

const markBMI = marksweight/(marksheight*marksheight)
const johnBMI = johnweight/(johnheight*johnheight)

const comparison = markBMI > johnBMI

console.log("BMI của Mark:", markBMI);
console.log("BMI của John:", johnBMI);
console.log("Mark có BMI cao hơn John không?", comparison);

if (comparison) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (comparison) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`)
}