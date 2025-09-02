//Q1.  Double All Values
const numbers = [1, 2, 3, 4];
console.log(`Numbers: ${JSON.stringify(numbers)}`);
console.log(`Doubled Numbers: ${JSON.stringify(numbers.map((i) => i * 2))}`);

//Q2. Convert to Uppercase
const fruits = ["apple", "banana", "cherry"];
console.log(`Fruits: ${JSON.stringify(fruits)}`);
const fruitsInUppercase = fruits.map((i) => i.toUpperCase());
console.log(`UpperCase: ${JSON.stringify(fruitsInUppercase)}`);

//Q3. Filter by Length > 5
const words = ["hello", "sunshine", "world", "javascript"];
console.log(`Words: ${JSON.stringify(words)}`);
console.log(
  `Filtered words by length>5: ${JSON.stringify(
    words.filter((i) => i.length > 5)
  )}`
);

//Q4. Analyze Student Scores
const students = [
  { name: "Amit", scores: [80, 75, 90] },
  { name: "Sara", scores: [60, 70, 65] },
  { name: "John", scores: [85, 90, 92] },
  { name: "Chetan", scores: [95, 99, 94] },
];
console.log(students);

//Print the average score of each student using map.
let avg = students.map((student)=>{
    let totalScore = student.scores.reduce((sum, score) => sum + score, 0); 
    let avgScore = totalScore / student.scores.length; 
    console.log(`Average Score of ${student.name}: ${avgScore}`);
    return {...student, avgScore};
});

//Filter students whose average is above 85.
let greaterAvg = avg.filter((student) => student.avgScore > 85);
console.log("Students with average > 85:", greaterAvg);

//Chain map → filter → forEach to print "Topper: <name> (avg: <avg>)".
console.log(avg.forEach(student => {
    console.log(`Topper: ${student.name} (avg: ${student.avgScore})`);
  }));
