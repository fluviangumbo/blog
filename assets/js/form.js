// TODO: Create a variable that selects the form element
const post = document.querySelector('#blogpost');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function blogSubmission(event) {
    event.preventDefault();

    const userName = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const error = document.querySelector('#error');

    if ((!userName) || (!title) || (!content)) {
        error.textContent = 'Please complete the form.';
    }

    const newPost = {
        username: userName,
        title: title,
        content: content,
    };

    storeLocalStorage(newPost);

    redirectPage('blog.html');
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
post.addEventListener('submit', blogSubmission);