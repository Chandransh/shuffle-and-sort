const shuffleBtn = document.getElementById("shuffle-btn");
const sortBtn = document.getElementById("sort-btn");

shuffleBtn.addEventListener("click", function() {
	const numberBlocks = document.querySelectorAll(".number-block-container > .number-block");
	let totalBlocksLength = numberBlocks.length;
	let randomIndex;

    while(totalBlocksLength > 0) {
    	// Generate random number between 0 and `totalBlocksLength` inclusive of 0
        randomIndex = Math.floor(Math.random() * totalBlocksLength);

        totalBlocksLength--;

        // Swap nodes at current index and random index
        numberBlocks[totalBlocksLength].after(numberBlocks[randomIndex]);
    }
});

sortBtn.addEventListener("click", function() {
	const numberBlocksContainer = document.querySelector(".number-block-container");

	const sortedListItems = [...numberBlocksContainer.children].sort((a, b) =>
		a.innerText > b.innerText ? 1 : -1
	);

	sortedListItems.forEach(function(node) {
		// Appending an existing node will move it to its new position.
		// In this case, each `li` item is moved in the DOM in correct order
		numberBlocksContainer.appendChild(node);
	});
});
