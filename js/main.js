 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

const inventors = [ //taken from another github for practice
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [ //taken from another github for practice
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(function(inventor){ //this one is to get inventors that are born between 1500 and 1600
    if(inventor.year >= 1500 && inventor.year <= 1600)
    return true;
  });
  console.table(fifteen);
//--------------------------------------------------------------------------------
  // Array.prototype.map()
  // 2. Give us an array of the inventor first and last names
  const fullName = inventors.map(inventor => inventor.first +' '+ inventor.last); //this one is to list the names first and last name with out year and passed 
  console.table(fullName);
//--------------------------------------------------------------------------------
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
// ordered = inventors.sort(function(firstPerson, secondPerson){ 
//     if(firstPerson.year > secondPerson.year)
//     return 1;
//     else{
//     return -1;
//     }
//   });
  const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1); // this one is sorting the list of inventors lowest birth number to the heighest
  console.table(ordered);
//--------------------------------------------------------------------------------
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  const totalYears = inventors.reduce((total, inventor) => { //this one how long did the inventors live and sum all of it in totalYears
    return total + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);
//--------------------------------------------------------------------------------
  // 5. Sort the inventors by years lived
//   const oldest = inventors.sort(function(a, b){ 
//     const lastGuy = a.passed - a.year;
//     const nextGuy = b.passed - b.year;
//     if(lastGuy > nextGuy)
//     return -1;
//     else{
//     return 1;
//     }
//   });

const oldest = inventors.sort(function(a, b){ //this one is sorting the list of inventors starting from the oldest to the youngest
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? 1 : -1;
})
  console.table(oldest);
//--------------------------------------------------------------------------------
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const category = document.querySelector('.mw-category'); //this code is used in the link above there is a small problem where it give the text undefined.
    // const de = links
    //           .map(link => link.textContent)
    //           .filter(streetName => streetName.includes('de'));// select only the street name with (de) in it.

//--------------------------------------------------------------------------------
  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const alpha = people.sort((lastOne, nextOne) => { // this one sort the last name alphabetically
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1;
  });
  console.log(alpha);
 //--------------------------------------------------------------------------------
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
  const transportation = data.reduce(function(obj, item){ // and this one is sum up each item in the data array above 
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
  },{});
  
  console.log(transportation);
