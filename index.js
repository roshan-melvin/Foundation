// Educational placeholder file


// Add this to test your automated pipeline block
const MOCK_SLACK_TOKEN = "xoxb-123456789012-123456789012-ABCD1234efgh5678ijkl9012";


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
