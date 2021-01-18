let counter = 1;
const btnElm = document.getElementById("btn");
btnElm.innerHTML = `${counter}`;

btnElm.addEventListener("click", function (event) {
  counter += 1;
  console.log(compareWithScreenSize(counter));
  if (compareWithScreenSize(counter)) {
    resetState();
  } else {
    btnElm.innerHTML = `${counter}`;
    updateStyles(counter);
  }

  console.log();
});

function updateStyles(counter) {
  btnElm.style.width = counter * 50;
  btnElm.style.height = counter * 50;
}

function compareWithScreenSize(counter) {
  return counter * 50 > window.innerWidth || counter * 50 > window.innerHeight;
}

function resetState() {
  counter = 1;
  btnElm.innerHTML = `${counter}`;
  updateStyles(counter);
}

console.log(btnElm);
