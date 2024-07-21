// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backBtn = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM
function postBuilder (type, content, parentEl) {
    const elem = document.createElement(type);
    elem.textContent = content;
    parentEl.appendChild(elem);
    return elem;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts () {
    postBuilder('h2', 'No Blog posts yet...', mainEl)
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
    const blogs = readLocalStorage();

    if (!blogs.length) {
        noPosts();
        return;
    }

    for (blog in blogs) {
        const post = postBuilder('article', '', mainEl);
        post.setAttribute('class', 'card');

        postBuilder('h2', blog.title, post);
        postBuilder('blockquote', blog.content, post);
        postBuilder('p', `Post made by ${blog.username}`, post);
    }

}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function () {
    redirectPage('index.html');
});