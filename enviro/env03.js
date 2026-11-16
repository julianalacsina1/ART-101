let environmentTitle = "A Cozy Cafe during Autumn Rain";

let environmentElements = ["warmth", "steaming coffee", "soft blanket", "foggy windows"];
let count = 0;

let mainEntity = {
    name: "couch",
    type: "comfy",
    mood: "peaceful",
    isMoving: false,
    favoriteElement: environmentElements[1]
};

$("#bumpin-button").click(function () { 
  

    count = count + 1;


    let mood = mainEntity.mood[arrayPosition];

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + mainEntity.mood + ".</p>"
    message = message + "<p>My name is " + mainEntity.name + ".</p>";
    message = message + "<p>I am an " + mainEntity.species + ".</p>";
    message = message + "<p>My favorite food is " + mainEntity.favoriteFood + ".</p>";



$("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(mood);

};    
    