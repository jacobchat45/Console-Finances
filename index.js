var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];



let months = [];
let monies = [];
console.log(finances.length);

// seperate into 2 arrays
for(let x = 0; x < finances.length; x++){
       months.push(finances[x][0]);
       monies.push(finances[x][1]);
       
}
console.log(months);
console.log(monies);
//function that adds all the money together
const sum = monies.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

let totalMonths = months.length;
console.log(`Total sum: ${sum} Amount of months: ${monies.length}`);

let profitChange = [];
for(let pC = 1; pC < monies.length; pC++){
    profitChange.push(monies[pC] - monies[pC - 1]); 
}

console.log(profitChange);
const profitSum = profitChange.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);


let averageChanges = Math.round(profitSum / profitChange.length * 100) / 100;
console.log(averageChanges);

let greatestIncrease = 0;
let greatestIncreaseMonth = "";


for(let n = 1; n < finances.length; n++){
  const currentMonthBalance = finances[n][1];
  const previousMonthBalance = finances[n - 1][1];
  const difference = currentMonthBalance - previousMonthBalance;

  if(difference > greatestIncrease){
    greatestIncrease = difference;
    greatestIncreaseMonth = finances[n][0];
  }
};

console.log(greatestIncrease);
console.log(greatestIncreaseMonth);

let greatestDecrease = 0;
let greatestDecreaseMonth = "";

for(let v = 1; v < finances.length; v++){
  const currentMB = finances[v][1];
  const previousMB = finances[v - 1][1];
  if(currentMB < previousMB){
    const diff = Math.abs(currentMB - previousMB);
    console.log(diff);
    console.log(greatestDecrease);
    if(diff > greatestDecrease){
      greatestDecrease = diff;
      greatestDecreaseMonth = finances[v][0];
    }
  }
}
console.log(greatestDecrease);
console.log(greatestDecreaseMonth);

// put months and numbers into seperate array?

// date & profit/losses
// write code that analyses these records and calculates the following:
//  -The total number of months included in the dataset DONE

//  -The net total amount of profit/losses over the entire period DONE

//  -The average of the changes in profit/losses over the entire period

// will need to track what the total change in profits are from month to month and then find the average
// total * number of months DONE

// the greatest increase in profits with date & amount 

// greatest decrease in profits w/ date & amount


// Financial Analysis
// ----------------------------
// Total Months: 86
// Total: $38382578
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
// ['Sep-2013', -1196225],


console.log(`Financial Analysis \n ---------------------------- \n Total months: ${months.length} \n Total: $${sum} \n Average Change: $${averageChanges}\n Greatest Increase in Profits: ${greatestIncreaseMonth}[${greatestIncrease}]\n Greatest Decrease in Profits: ${greatestDecreaseMonth} [-${greatestDecrease}]\n`)