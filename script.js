document.addEventListener('DOMContentLoaded', function() {

// Selecting necessary elements from the DOM
    const form = document.querySelector('[data-js-form]');
    const template = document.querySelector('[data-js-template]');
    const wrapper = document.querySelector('[data-js-wrapper]');
    
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent form submission to avoid page refresh

        // Retrieving the selected rating value from the form
        const ratingValue = new FormData(event.target).get('rating');
        console.log(ratingValue); // Log the value of the selected rating

        // Checking if a rating value is present
        if (ratingValue) {
            // Show the thank you section and replace {{rating}} with the selected value
            const templateContent = template.innerHTML.replace('{{rating}}', ratingValue);
            wrapper.innerHTML = templateContent;
        } 
    }
    // Listening for the form submit event and invoking the handleSubmit function
    form.addEventListener('submit', handleSubmit);
});