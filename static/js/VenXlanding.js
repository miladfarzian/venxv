// menu handling
const menuBtn = document.querySelector('.menu-btn');
const clsMenuBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function () {
    mobileMenu.style.left = '-100%';
    // menuBtn.style.display = 'none';
    menuBtn.style.display = 'none';
    clsMenuBtn.style.display = 'block';
});


clsMenuBtn.addEventListener('click', function () {
    mobileMenu.style.left = '0';
    menuBtn.style.display = 'block';
    clsMenuBtn.style.display = 'none';
})

//close menu when click on each list item
const menuItems = document.querySelectorAll('.list-item');
menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        mobileMenu.style.left = '0';
        menuBtn.style.display = 'block';
        clsMenuBtn.style.display = 'none';
    })
});

// Function to handle scroll events
function handleScroll() {
    // Check the current scroll position
    const scrollPosition = window.scrollY;

    // If the scroll position is 5rem (80px) or more, hide the mobile menu
    if (scrollPosition >= 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
        mobileMenu.style.left = '0';
        menuBtn.style.display = 'block';
        clsMenuBtn.style.display = 'none';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


function sendPriceToFlask(button) {

    // Traverse the DOM to find hidden input fields
    var planName = button.parentElement.querySelector('input[name="plan_name"]').value;
    var duration = button.parentElement.querySelector('input[name="duration"]').value;
    var price = button.parentElement.querySelector('input[name="price"]').value;

    // Send an HTTP request to Flask with the plan details
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/receive_price', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Price sent successfully');
            // Toggle the modal after sending the price
        } else {
            console.log('Error sending price');
        }
    };
    xhr.send(JSON.stringify({plan_name: planName, duration: duration, price: price}));
}

const modal = document.querySelector('.modal-container');
const pricingBtn = document.querySelectorAll('.pricing-btn');
pricingBtn.forEach(pricingBtn => {
    pricingBtn.addEventListener('click', function () {
        modal.style.opacity = '1';
        modal.style.top = '5rem';
    })
});

const clsModalBtn = document.querySelector('.close-modal-btn');
clsModalBtn.addEventListener('click', function () {
    modal.style.opacity = '0';
    modal.style.top = '-110rem';
})

// Get a reference to the mobile menu element
const mobileMenu = document.querySelector('.mobile-menu');


// Function to handle button click event
function scrollToTarget() {
    // Get the target element
    const targetElement = document.getElementById('targetElement');

    // Scroll to the target element
    targetElement.scrollIntoView({behavior: 'smooth'}); // Smooth scroll
}

// Get the button element
const scrollButton = document.getElementById('scrollButton');

// Attach click event listener to the button
scrollButton.addEventListener('click', scrollToTarget);

function disableSubmit() {
    document.getElementById('submitBtn').disabled = true; // Disable the submit button
}

function submitForm() {
    // Close the modal (if necessary, this part remains the same)
    closeModal();
  
    // Add the "submitted" class to the form to trigger CSS animation
    document.getElementById("form").classList.add("submitted");
  
    // Optionally, delay the redirection to ensure the message is visible
    // setTimeout(() => {
    //   window.location.href = "/new-page"; // Replace with your actual redirection
    // }, 2000); // Adjust delay in milliseconds as needed
  }
  

function closeModal() {
    // Close the modal by hiding it or removing it from the DOM
    document.getElementById('modal-container').style.display = 'none';
}

