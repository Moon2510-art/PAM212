let passwordDB = "root";

let input = "notroot";

let output = input == passwordDB;

if (output == true){
    console.log("Login succesful!");
} else {
    console.log("Wrong Password!");
}

console.log(output);

let score = 70;

if (score > 30) {
    console.log("You need more practice");
} else if (score > 15) {
    console.log("You're getting better at this");
} else {
    console.log("You need to follow this tutorial");
}

let typecard = "Debit Card";

switch(typecard) {
    case "Debit Card":
        console.log("This is a debit card");
        break;
    case "Credit Card":
        console.log("This is a credit card");
        break;
    default:
        console.log("No card");
}