const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

// For opening popup

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

// For closing popup using "X" sign

close_modals.forEach((btn) => {
    btn.addEventListener("click", () => { const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// After opening popup, if you click outside the popup, it will close.

window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};

function validate() {
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  let text;

  if (name.length < 3) {
    text = "Please Enter valid Name (Minimum 3 characters)";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  if (subject.length < 10) {
    text = "Please Enter Correct Subject (Minimum 10 characters)";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    text = "Please enter a valid Email (e.g. abc@gmail.com)";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  if (message.length < 140) {
    text = "Please enter more than 140 characters";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  if (message.length > 500) {
    text = "Please enter less than 500 characters";
    error_message.innerHTML = text;
    error_message.classList.add("active");
    return false;
  }

  alert("Form submitted successfully! Thank you for Contacting us");
  error_message.classList.remove("active");
  return true;
}


// 🔍 Search Function
function filter() {
  let input = document.querySelector("input[type='search']");
  let filterValue = input.value.toUpperCase();
  let products = document.querySelectorAll("#product-list .col-12");

  products.forEach(product => {
    let name = product.querySelector(".product-name").innerText.toUpperCase();
    if (name.indexOf(filterValue) > -1) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
}

// ↕️ Sort Function (By Price Ascending)
function sortList() {
  let list = document.getElementById("product-list");
  let items = Array.from(list.getElementsByClassName("col-12"));

  items.sort((a, b) => {
    let priceA = parseInt(a.querySelector(".price").innerText);
    let priceB = parseInt(b.querySelector(".price").innerText);
    return priceA - priceB; // ascending order
  });

  items.forEach(item => list.appendChild(item)); // re-append in sorted order
}

function clear() {
  let name = document.getElementById('name');
  let subject = document.getElementById('subject');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name.innerHTML="";
  subject.innerHTML="";
  phone.innerHTML="";
  email.innerHTML="";
  message.innerHTML="";
}