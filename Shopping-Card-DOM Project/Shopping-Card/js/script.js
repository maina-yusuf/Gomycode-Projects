document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".list-products");
  const totalPriceElement = document.querySelector(".total");

  // Function to update the total price
  function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll(".card-body").forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const price = parseFloat(
        item.querySelector(".unit-price").textContent.replace("$", "")
      );
      totalPrice += (quantity * price) / 2;
    });
    totalPriceElement.textContent = `${totalPrice} $`;
  }


// Add on-click to the Plus Button
const addbuttons = document.getElementsByClassName("fas fa-plus-circle");
  for (let i = 0; i < addbuttons.length; i++) {
    addbuttons[i].addEventListener("click", increase);
}


// Function to increase the quantity
  function increase(event) {
    const button = event.target;
    const cardBody = button.closest(".card-body");
    const quantityItem = cardBody.querySelector(".quantity");
    let quantity = parseInt(quantityItem.textContent, 10 || 0);
    quantity += 1;
    quantityItem.textContent = quantity;
    updateTotalPrice();
  }


  const buttons = document.getElementsByClassName("fas fa-minus-circle");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", decrease);
  }

  // Function to decrease quantity
  function decrease(event) {
    const button = event.target;
    const cardBody = button.closest(".card-body");
    const quantityItem = cardBody.querySelector(".quantity");
    let quantity = parseInt(quantityItem.textContent, 10 || 0);
    quantity -= 1;
    quantityItem.textContent = quantity;
    updateTotalPrice();
  }

  

  // Function to delete item
  const delItem = document.getElementsByClassName("fas fa-trash-alt");
  for (let i = 0; i < delItem.length; i++) {
    delItem[i].addEventListener("click", function () {
      deleteItem(this);
    });
  }

  function deleteItem(button) {
    if (confirm("Are you sure you want to delete this item?")) {
      const cardBody = button.closest(".card");
      cardBody.remove();
      updateTotalPrice();
      
    }
  }
 
  // Function to toggle like
  const likeItem = document.getElementsByClassName("fas fa-heart");

  function toggleLike(button) {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
      button.style.color = "red";
    } else {
      button.style.color = "";
    }
  }
  for (let i = 0; i < likeItem.length; i++) {
    likeItem[i].addEventListener("click", function () {
      toggleLike(this);
    });
  }
});
