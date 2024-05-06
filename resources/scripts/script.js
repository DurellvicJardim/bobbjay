// Get the form element with the id contactForm and store it in the form variable
const form = document.getElementById('contactForm');

// Add an event listener to the form for the submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value; // Get the value of the name input field and store it in the name variable

    const email = document.getElementById('email').value; // Get the value of the email input field and store it in the email variable

    const subject = document.getElementById('subject').value; // Get the value of the subject input field and store it in the subject variable

    const message = document.getElementById('message').value;  // Get the value of the message input field and store it in the message variable

    const country = document.getElementById('country').value; // Get the value of the country select field and store it in the country variable

    // Check if any of the following fields are empty
    if (!name || !email || !subject || !message || !country) {
        // If any fields are empty, display an alert message
        alert('PLEASE FILL IN ALL NECESSARY INFORMATION');
    } else {
        // If all fields are filled in, submit the form
        this.submit();
    }
});