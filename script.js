var grade=prompt('type your score')


if(grade>79 && grade<=100) {
    console.log('result is A');
} else if (grade>69 && grade<80) {
    console.log('result is B');

} else if (grade>59 && grade<70) {
    console.log('result is C');
} else if (grade>49 && grade<60) {
    console.log('result is D')

} else if (grade>=0 && grade<50) {
    console.log('result is F')

}else {
    console.log("sıfır")
 }
 //Check Season
 let month = prompt("write you month").toLowerCase()

 if(month == "september" || "october" || "nowember") {
     console.log("the season is Autumn")

 } else if (month == "december" || "january" || "february") {
     console.log("the season is Winter")
 } else if (month == "march" || "april" ||  "may") {
    console.log("the season is Spring")
}else if (month == "june"|| "july" || "august") {
    console.log("the season is Summer")
}else {
    console.log("wrong input")
}


//month day 
  month = prompt("write you month").toLowerCase()

if(month == "nisan" || "haziran" || "eylul" || "kasım" || "aralık") {
    console.log(`${month} has 30 days`)

} else if(month == "ocak" || "mart" || month =="mayıs" || "temmuz" || "agustos" || "ekim") {
    console.log(`${month} has 31 days`)

}else if(month == "subat") {
    console.log(`${month} has 28 days`)

}else {
    console.log("wrong input")
}
