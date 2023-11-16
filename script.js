// Event listener for form submission to fetch TV show data from TVMaze API,
// display show images in a container, and a reset button to clear the content.
const form = document.querySelector('form');
const div = document.querySelector('.container');
const rest = document.querySelector("#r");

form.addEventListener('submit', async function (e) {
    try {
        e.preventDefault();
        // Get search term from form input
        const searchTerm = await form.elements.query.value;
        // Configure parameters for API request
        const config = { params: { q: searchTerm } };
        // Fetch TV show data from API
        const api = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        // Display show images
        MakeImage(api.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

// Event listener for reset button to clear content
rest.addEventListener("click", function () {
    div.innerHTML = " "; // Clear displayed images
    form.elements.query.value = " "; // Clear input field
});

// Function to create and display images for TV shows
const MakeImage = (shows) => {
    for (let res of shows) {
        const img = document.createElement('img');
        img.src = res.show.image.medium;
        img.classList.add('dis');
        div.append(img);
    }
}
