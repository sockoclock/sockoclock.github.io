//Quiz

//responses
const responses = {
  Pop: "Super Awesome!",
  Rock: "Woohooo! Keep on rockin in the free world baby!",
  Jazz: "Oooh Jazzy B)",
  Classical: "Ha, Classic",
  Beginner: "Great! This is the Website for you!",
  Intermediate: "Perfect! Time to build on your skills!",
  Hard: "Sweet! Even experts need practice :D",
  Yes_Theory:
    "Nice! Check out our free music theory resources in the resources section if you need a refresher!",
  No_Theory:
    "Perfect! All the theory knowledge you will need can be found in the resources section!",
  Yes_Song: "Yay!",
  Big_Yes_Song: "That's the spirit!",
  Changed_Mind: "Changed your mind I see. So human of you haha.",
};

//Chat "Bot"

//creates var for dialog list
const dialog_list = document.getElementById("Dialog List");

//populating the dialog box
dialog_list.innerHTML += `<li>Hello! My name is Chat :D This Quiz helps us figure out where we should send you to get started!</li>`;
//
//
//
//
//
//
//

//Placement Code initialization
let placement = [0, 0, 0];

//import buttons

//question one
let q1_1 = document.getElementById("Q1.1"); //creates var from button
//adds listener and console log function to button
q1_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Pop}</li>`;
  if (placement[0] != 1) {
    placement[0] = 1;
    console.log(placement);
  }
});

//repeat

let q1_2 = document.getElementById("Q1.2");
q1_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Rock}</li>`;
  if (placement[0] != 2) {
    placement[0] = 2;
    console.log(placement);
  }
});
let q1_3 = document.getElementById("Q1.3");
q1_3.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Jazz}</li>`;
  if (placement[0] != 3) {
    placement[0] = 3;
    console.log(placement);
  }
});
let q1_4 = document.getElementById("Q1.4");
q1_4.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Classical}</li>`;
  if (placement[0] != 4) {
    placement[0] = 4;
    console.log(placement);
  }
});

//question 2
let q2_1 = document.getElementById("Q2.1");
q2_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Beginner}</li>`;
  if (placement[1] != 1) {
    placement[1] = 1;
    console.log(placement);
  }
});
let q2_2 = document.getElementById("Q2.2");
q2_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Intermediate}</li>`;
  if (placement[1] != 2) {
    placement[1] = 2;
    console.log(placement);
  }
});
let q2_3 = document.getElementById("Q2.3");
q2_3.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Hard}</li>`;
  if (placement[1] != 3) {
    placement[1] = 3;
    console.log(placement);
  }
});

//question 3
let q3_1 = document.getElementById("Q3.1");
q3_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Yes_Theory}</li>`;
  if (placement[2] != 1) {
    placement[2] = 1;
    console.log(placement);
  }
});
let q3_2 = document.getElementById("Q3.2");
q3_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.No_Theory}</li>`;
  if (placement[2] != 2) {
    placement[2] = 2;
    console.log(placement);
  }
});

//question 4
let q4_1 = document.getElementById("Q4.1");
q4_1.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Yes_Song}</li>`;
  console.log("This question does not effect the placement code");
});
let q4_2 = document.getElementById("Q4.2");
q4_2.addEventListener("click", function () {
  dialog_list.innerHTML += `<li>${responses.Big_Yes_Song}</li>`;
  console.log("This question does not effect the placement code");
});

//Go To Assignment button
let calc = document.getElementById("Calculate Assignment");
calc.addEventListener("click", function () {
  //console.log("button works"); //test
  if (placement.toString() == [1, 1, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popt/popbegt.html">Pop Beginner Theory</a></li>`;
  } else if (placement.toString() == [1, 1, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popno-t/popbegno-t.html">Pop Beginner No Theory</a></li>`;
  } else if (placement.toString() == [1, 2, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popt/popintt.html">Pop Intermediate Theory</a></li>`;
  } else if (placement.toString() == [1, 2, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popno-t/popintno-t.html">Pop Intermediate No Theory</a></li>`;
  } else if (placement.toString() == [1, 3, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popt/pophrdt.html">Pop Hard Theory</a></li>`;
  } else if (placement.toString() == [1, 3, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popno-t/pophrdno-t.html">Pop Hard No Theory</a></li>`;
  } else if (placement.toString() == [2, 1, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockt/rockbegt.html">Rock Beginner Theory</a></li>`;
  } else if (placement.toString() == [2, 1, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockno-t/rockbegno-t.html">Rock Beginner No Theory</a></li>`;
  } else if (placement.toString() == [2, 2, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockt/rockintt.html">Rock Intermediate Theory</a></li>`;
  } else if (placement.toString() == [2, 2, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockno-t/rockintno-t.html">Rock Intermediate No Theory</a></li>`;
  } else if (placement.toString() == [2, 3, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockt/rockhrdt.html">Rock Hard Theory</a></li>`;
  } else if (placement.toString() == [2, 3, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="rock/rockno-t/rockhrdno-t.html">Rock Hard No Theory</a></li>`;
  } else if (placement.toString() == [3, 1, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzt/jazzbegt.html">Jazz Beginner Theory</a></li>`;
  } else if (placement.toString() == [3, 1, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzno-t/jazzbegno-t.html">Jazz Beginner No Theory</a></li>`;
  } else if (placement.toString() == [3, 2, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzt/jazzintt.html">Jazz Intermediate Theory</a></li>`;
  } else if (placement.toString() == [3, 2, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzno-t/jazzintno-t.html">Jazz Intermediate No Theory</a></li>`;
  } else if (placement.toString() == [3, 3, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzt/jazzhrdt.html">Jazz Hard Theory</a></li>`;
  } else if (placement.toString() == [3, 3, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="jazz/jazzno-t/jazzhrdno-t.html">Jazz Hard No Theory</a></li>`;
  } else if (placement.toString() == [4, 1, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clast/clasbegt.html">Classical Beginner Theory</a></li>`;
  } else if (placement.toString() == [4, 1, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clasno-t/clasbegno-t.html">Classical Beginner No Theory</a></li>`;
  } else if (placement.toString() == [4, 2, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clast/clasintt.html">Classical Intermediate Theory</a></li>`;
  } else if (placement.toString() == [4, 2, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clasno-t/clasintno-t.html">Classical Intermediate No Theory</a></li>`;
  } else if (placement.toString() == [4, 3, 1].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clast/clashrdt.html">Classical Hard Theory</a></li>`;
  } else if (placement.toString() == [4, 3, 2].toString()) {
    dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="clas/clasno-t/clashrdno-t.html">Classical Hard No Theory</a></li>`;
  }
  dialog_list.innerHTML += `<li>Here is your assignment! Have fun! <br> <a href="pop/popt/popbegt.html">Pop Beginner Theory</a></li>`;
});
