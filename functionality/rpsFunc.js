var userArray = {
    rock: ["Rock draws with rock. No one wins!", "Rock is covered by paper. Bot wins!", "Rock crushes scissors. Player wins!", "Rock crushes lizard. Player wins!", "Rock is vaporised by Spock. Bot wins!"],
    paper: ["Paper covers rock. Player wins!", "Paper draws with paper. No one wins!", "Paper is cut by scissors. Bot wins!", "Paper is eaten by lizard. Bot wins!", "Paper disproves Spock. Player wins!"],
    scissors: ["Scissors are crushed by rock. Bot wins!", "Scissors cut paper. Player wins!", "Scissors draw with scissors. No one wins!", "Scissors decapitate lizard. Player wins!", "Scissors are smashed by Spock. Bot wins!"],
    lizard: ["Lizard is crushed by rock. Bot wins!", "Lizard eats paper. Player wins!", "Lizard is decapitated by scissors. Bot wins!", "Lizard draws with lizard. No one wins!", "Lizard poisons Spock. Player wins!"],
    spock: ["Spock vaporises rock. Player wins!", "Spock is disproved by paper. Bot wins!", "Spock smashes scissors. Player wins!", "Spock is poisoned by lizard. Bot wins!", "Spock draws with Spock. No one wins!"]
};

function calculateWinner(args) {
    if (args) {
        userSelection = args.toString();
        row = userArray[userSelection];
        index = Math.floor(Math.random() * 5);
        return (row[index]);
    } else return ("Enter rock/paper/scissors/lizard/spock.\neg: rps rock");
};

module.exports = {
    calculateWinner
};