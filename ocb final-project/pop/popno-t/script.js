//assignment dialog
let dialog = document.getElementById("Pop Dialog");
dialog.innerHTML += `<li>Hello</li>`;

//explaination buttons
let chorusexplained = document.getElementById("Chorus Explained");
chorusexplained.addEventListener("click", function () {
  dialog.innerHTML += `<li>"A chorus is a section of a song that is repeated at least twice, encompasses
  <br />
  the main message and tone of the song, and relieves the musical tension that is
  <br />
  built up throughout the other parts of the song" <br /></li>`;
});
//
let wdtm_chorus = document.getElementById("WDTM Chorus");
wdtm_chorus.addEventListener("click", function () {
  dialog.innerHTML += `<li>See our <a href="popreferences.html">Music Theory References Page</a></li>`;
});
