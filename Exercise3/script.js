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

console.log("BONUS 1")
const Dolphinsscore = (97+112+101)/3
const Koalasscore = (109+95+123)/3
const min = 100
if (Dolphinsscore >= min && Dolphinsscore > Koalasscore) {
    console.log("Dolphin wins")
} else if (Koalasscore >= min && Dolphinsscore < Koalasscore) {
    console.log("Koala wins")
} else {
    console.log("Draw")
}

console.log("BONUS 2")
const DolphinsScore = (97+112+101)/3
const KoalasScore = (109+95+123)/3
if (DolphinsScore == KoalasScore && DolphinsScore >= min && KoalasScore >= min) {
    console.log("Draw")
} else {
    console.log("No team wins the trophy")
}