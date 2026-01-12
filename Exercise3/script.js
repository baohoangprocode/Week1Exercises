const dolphinsscore = (96+108+89)/3
const koalasscore = (88+91+110)/3

console.log(dolphinsscore, koalasscore)
if (dolphinsscore > koalasscore) {
    console.log("Dolphin wins")
} else if (dolphinsscore < koalasscore) {
    console.log("Koala wins")
} else {
    console.log("Draw")
}

const min = 100
if (dolphinsscore >= min && dolphinsscore > koalasscore) {
    console.log("Dolphin wins")
} else if (koalasscore >= min && dolphinsscore < koalasscore) {
    console.log("Koala wins")
} else {
    console.log("Draw")
}

if (dolphinsscore == koalasscore && dolphinsscore >= min && koalasscore >= min) {
    console.log("Draw")
} else {
    console.log("No team wins the trophy")
}