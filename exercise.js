// Get the value of the firstName text input field and print it in the console.

// HELPER FUNCTION
const getById = (selector) => document.getElementById(selector);

// DOM
const inpt = getById("firstName");

// LISTEN
const addEvntListener = (eventType, domObj) =>
  domObj.addEventListener(eventType, (evt) => console.log(evt.target.value));

// APP START
addEvntListener("input", inpt);
