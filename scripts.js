{
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  const colors = ["silver", "red", "blue"];

  function addPresent() {
    // Create DOM element and set it to a variable
    const present = document.createElement("div");

    // Add class "present"
    present.classList.add("present");

    // Add a class for color,
    // randomly adding either class
    // "silver", "red", or "blue".
    // Use the colors array.

    present.classList.add(colors[getRandomIntInclusive(0,2)]);

    // Add event listener so when
    // the DOM element is clicked,
    // it is removed from the document
    present.addEventListener('click', () => {
        present.remove();
    })

    // Append your DOM element to the ".presents" div
    const presents = document.querySelector(".presents");
    presents.append(present);
  }

  // Add event listener so when .christmas-tree
  // is clicked, addPresent() is called
  document
    .querySelector(".christmas-tree")
    .addEventListener("click", addPresent);
}
