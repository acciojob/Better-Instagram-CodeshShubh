//your code here
 const images = document.querySelectorAll(".image");
let draggedImage = null;
let targetImage = null;

// Add drag-and-drop event listeners to each image
images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedImage = e.target; 
  }); 

  // When dragging ends
  image.addEventListener("dragend", (e) => {
    draggedImage = null; // Clear the reference
	targetImage = null;
  });

  // Allow drop by preventing default behavior
  image.addEventListener("dragover", (e) => {
    e.preventDefault();
	  targetImage = e.target; // Store the image being dragged over
  });

  // Handle the drop
  image.addEventListener("drop", () => {
    if(draggedImage && targetImage){
		const temHTML = draggedImage.innerHTML;
		draggedImage.innerHTML = targetImage.innerHTML;
		targetImage.innerHTML = temHTML;
	}
  });
});

