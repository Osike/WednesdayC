// /**
//  * Function to check a person's eligibility for voting based on their age.
//  * This demonstrates the fundamental use of the if...else conditional structure.
//  * * @param {number} age - The age of the person.
//  * @returns {string} - The status message based on eligibility.
//  */
// function checkVotingEligibility(age) {
//     // 1. The main IF condition: Check if the person is 18 or older.
//     // This handles the "YES" path from the flowchart.
//     if (age >= 18) {
//         // If the condition is TRUE, this code block executes.
//         return "Congratulations! You have voted successfully.";
//     } 
    
//     // 2. The ELSE condition: This code runs ONLY if the IF condition (age >= 18) 
//     // was FALSE (meaning age MUST be less than 18).
//     // This handles the "NO" path from the flowchart.
//     else {
//         // If the condition is FALSE, this code block executes.
//         return "Eligibility criteria not met. Please go back home.";
//     }
// }

// // --- Demonstration Calls ---

// console.log("--- Testing Eligibility ---");

// // Test Case 1: Eligible Age (25)
// const eligibleAge = 25;
// const result1 = checkVotingEligibility(eligibleAge);
// console.log(`Age: ${eligibleAge} -> Result: ${result1}`); 
// // Expected Output: Congratulations! You have voted successfully.

// // Test Case 2: Ineligible Age (16)
// const ineligibleAge = 16;
// const result2 = checkVotingEligibility(ineligibleAge);
// console.log(`Age: ${ineligibleAge} -> Result: ${result2}`); 
// / Expected Output: Eligibility criteria not met. Please go back home.

// // Test Case 3: Edge Case (18)
// const edgeAge = 18;
// const result3 = checkVotingEligibility(edgeAge);
// console.log(`Age: ${edgeAge} -> Result: ${result3}`);
// // Expected Output: Congratulations! You have voted successfully.
// console.log("hello world");
// const userName = prompt("Please enter your name:");

// if (userName !== null && userName !== "") {
//   console.log(`Hello, ${userName}!`);
// } else {
//   console.log("You didn't enter a name.");
// }

// prompt("Please enter your name:", "Harry Potter");
// const userInput = prompt("Please enter your name:");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter something: ", function(answer) {
  console.log("You entered:", answer);
  rl.close();
});
