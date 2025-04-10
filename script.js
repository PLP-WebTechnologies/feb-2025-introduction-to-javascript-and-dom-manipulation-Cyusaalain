// Change text and style
document.getElementById('change-btn').addEventListener('click', function () {
    const desc = document.getElementById('description');
    desc.textContent = "The text and style have been changed!";
    desc.style.color = "white";
    desc.style.backgroundColor = "#007BFF";
    desc.style.padding = "10px";
    desc.style.borderRadius = "5px";
  });
  
  // Add or remove element dynamically
  let isElementAdded = false;
  
  document.getElementById('toggle-element-btn').addEventListener('click', function () {
    const container = document.getElementById('container');
  
    if (!isElementAdded) {
      const newElement = document.createElement('p');
      newElement.textContent = "I was added dynamically!";
      newElement.id = "dynamic-element";
      container.appendChild(newElement);
    } else {
      const existing = document.getElementById('dynamic-element');
      if (existing) {
        container.removeChild(existing);
      }
    }
  
    isElementAdded = !isElementAdded;
  });  
