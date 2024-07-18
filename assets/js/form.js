// TODO: Create a variable that selects the form element
const post = document.getElementById('#blogpost');
const userName = document.getElementById('#username');
const title = document.getElementById('#title');
const content = document.getElementById('#content');
const error = document.getElementById('#error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function blogSubmission(event) {
    event.preventDefault();

    if ((!userName) || (!title) || (!content)) {
        error.innerHTML = 'Please complete the form.';
    }

};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
post.addEventListener('submit', blogSubmission)