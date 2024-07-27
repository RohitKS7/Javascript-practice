const superHero = "Batman";

switch (superHero) {
  case "Iron Man":
    console.log("I am Iron Man");
    break;

  case "Thor":
    console.log("Where is my Hammer");
    break;

  case "Captain America":
    console.log("Bring My Shield");
    break;

  case "Black Widow":
    console.log("I am widow bcoz my husband is dead");

  // If no case matches then show Default Value
  default:
    console.log(
      "You are searching DC universe hero in Marvel universe, Go and Ask rosso brother's to collab with DC"
    );
    break;
}
