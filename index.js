// Educational placeholder file


function greet() {
  console.log("Welcome to the GitHub hidden features guide.");
}
greet();

// This will trigger a CodeQL alert on your PR
function runVulnerableCode(userInput) {
    // CodeQL tracks untrusted input entering this execution sink
    eval(userInput); 
}
runVulnerableCode("console.log('Testing CodeQL');");
