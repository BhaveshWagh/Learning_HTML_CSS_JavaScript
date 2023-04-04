// Higher Order functions
// forEach
// filter
// map
// sort
// reduce

const companies = [
  { name: "Google", category: "product Based", start: 1981, end: 2004 },
  { name: "Amzon", category: "product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2008 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2005 },
];

const ages = [33, 12, 22, 34, 14, 11, 43, 54, 65, 37, 32];

// simple for loop
for (i = 0; i <= companies.length; i++) {
  // console.log(companies[i])
}

// forEach()
companies.forEach(function (company, index) {
  //     // console.log(company)
  //     console.log(index)
  //     // console.log(company.name)
});

// using Arrow function
// companies.forEach((company)  => console.log(company))

// Filter :

for (i = 0; i <= ages.length; i++) {
  if (ages[i] >= 20) {
    // console.log(ages[i]);
  }
}

// now using filter
const age = ages.filter(function (age) {
  if (age >= 20) {
    // console.log(age)
    return true;
  }
});
// console.log(age)

const finalAge = ages.filter((age) => age >= 20);
const finalAge12 = ages.filter((age) => age >= 20);
// console.log(finalAge)

const serv = companies.filter(function (company) {
  if (company.category === "Service Based") {
    return true;
  }
});
// console.log(serv)

const sb = companies.filter((company) => company.category === "Service Based");
// console.log(sb)

// map

// companies.map((company, index) => {
//   console.log(company, index);
// });

// string literal backticks -> `${}`
const compDetails = companies.map((comap) => {
  return `${comap.name} : ${comap.category}`;
});
// console.log(compDetails)

// sort

const sorted = companies.sort(function (c1, c2) {
  if (c1.start < c2.start) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(sorted)

const sorts = companies.sort((c3, c4) => (c3.start < c4.start ? 1 : -1));
// console.log(sorts)

const agesSort = ages.sort((a, b) => b - a); // a - b Ascending , b - a Descending
// console.log(agesSort)

// reduce
// simple way
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
// console.log(sum);

// using reduce 

const totalOfAge = ages.reduce((prev,curr) => prev + curr,0)
// console.log(totalOfAge)

const totalAges= ages.reduce(function(prev,curr) {
    return prev + curr
},0)

console.log(totalAges)
