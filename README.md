# TV-show-search-site

Description
This site is designed to create a simple TV show search application using the TVMaze API. Users can submit a search query through a form, and the application will fetch relevant TV show data from the API. The retrieved show images are then displayed in a container. Additionally, a reset button is provided to clear the displayed content and reset the input field.

Technologies:
*HTML
*CSS
*Java-script
*Bootstrap
*TV-maze-API

Usage
Form Submission

The user enters a search term in the form input field.
Upon submitting the form, the application prevents the default form submission behavior, retrieves the TV show data from the TVMaze API based on the provided search term, and then displays the show images in the designated container.
Reset Button

The reset button, with the id "r", allows the user to clear the displayed images and reset the input field to its initial state.
Dependencies
axios: This code utilizes the Axios library for making asynchronous HTTP requests to the TVMaze API.
How to Run
Include the required dependencies in your HTML file.

html
Copy code
<!-- Axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Add the provided JavaScript code to your project.

Ensure that your HTML file has the necessary structure, including a form with an input field, a container for displaying images (with the class "container"), and a reset button (with the id "r").

html
Copy code
<form>
    <!-- Input field for search term -->
    <input type="text" name="query" placeholder="Enter TV show name">
    <!-- Submit button -->
    <button type="submit">Search</button>
</form>

<!-- Container for displaying show images -->
<div class="container"></div>

<!-- Reset button -->
<button id="r">Reset</button>

<!-- Include the script with the provided code -->
<script src="your-script.js"></script>
Run your HTML file in a web browser, and you should be able to use the TV show search application.

Notes
Ensure an internet connection is available to fetch data from the TVMaze API.
The TVMaze API may have usage limitations, so be mindful of potential rate limiting.
Feel free to customize the code or enhance the application based on your specific needs!
