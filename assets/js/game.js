function fight() {
    window.alert("The fight has begun!");
}
function recallName() {
    window.alert("No running away now, " + playerName);
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth)
var enemyName = "Assholes Live Forever";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning ");
};

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
fight();
// recallName();

// This is the format used for comments 
/* It
    can
     Look
      Like 
       This 
        Too

console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);
// what is this?
console.log("Our robot's name is " + playerName);
var name = "Archie Ross";
console.log(name);
*/
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }