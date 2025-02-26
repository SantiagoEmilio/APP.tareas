 function crearItem(item) {
    const Item = document.createElement("div");
    Item.className = "Item";
  
    Item.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${item}</span>`;
  
    return Item;
  }
  export{crearItem}