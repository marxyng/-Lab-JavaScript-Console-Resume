function displayPosition(company, job, description) {
    console.log("" + job + " at " + company + "" +   description);
}
function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("  BAM: " + skill);
    } else {
        console.log("" + skill);
    }
}

console.log("Marx Young".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: Awesome guy!");
console.log("My Interests (in order)");
console.log("* programming");
console.log("* music");
console.log("* fitness");
console.log("* video games");
console.log("My previous experiences:");
displayPosition("JC Penny", "cashier", " counted money")
displayPosition("Thift Store", "Assistant Manager", " supervised")
displayPosition("The Toy Store", "cashier", " counted money")
displayPosition("Silver Gym", "personal Trainer", " fitness")
console.log("My skills:");
displaySkill("programming", true);
displaySkill("swimming", false);
displaySkill("Spanish", false);
displaySkill("singing", true);
displaySkill("playing pool", false);
displaySkill("personal train", false);