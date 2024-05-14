# Joke API Server

This is a Node.js project that implements a simple Joke API server. The server allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of jokes.

## Project Structure

The project consists of a single file `server.js` which serves as the main entry point for the server.

## Running the Server

To run the server, follow these steps:

1. **Install Node.js**: Ensure that you have Node.js installed on your system. You can download and install it from the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/).

2. **Navigate to the Project Directory**: Open a terminal or command prompt and navigate to the directory where your `server.js` file is located.

3. **Install Required Dependencies (Optional)**: If your project relies on any external dependencies, you may need to install them using `npm install`. However, in the provided example, we're only using built-in Node.js modules, so you don't need to install anything.

4. **Run the Server**: Use the `nodemon` command followed by the name of your `server.js` file to start the server. If you haven't installed `nodemon` globally, you can run it from the `node_modules` folder using `npx nodemon server.js`.

5. **Accessing the Server**: Once the server is running, you can access it by opening a web browser and navigating to `http://localhost:3000`.

6. **Sending Requests**: You can use tools like Postman or `curl` commands to send HTTP requests (POST, GET, PATCH, DELETE) to the server endpoints (`/`, `/joke/:id`).

7. **Console Output**: The server will log messages to the console, including the port it's running on and any incoming requests it receives.

## Project Requirements

1. The server should be able to receive POST and GET requests on the home/route.
2. The server should use a variable called `db` as its database, which is an array of objects.
3. When the server receives a POST request, it should add a joke to the `db` and return the entire `db` to the client.
4. When the server receives a GET request, it should return all jokes to the client.
5. The server should receive PATCH and DELETE requests on a route like so (`/joke/1`). Note: `1` as seen in the URL here represents the ID.
6. When the server receives a PATCH request, it should update a joke which matches the ID provided in the URL. The information for the update should be sent via the request body, and the response sent to the client should be the updated joke only.
7. When the server receives a DELETE request, it should delete the joke which matches the ID provided in the URL and return the deleted joke to the user as a response.

## Example Usage

Here's an example of how you can interact with the server:

- **GET /joke**: Retrieve all jokes from the server.
- **POST /joke**: Add a new joke to the server's database.
- **PATCH /joke/:id**: Update a specific joke by ID.
- **DELETE /joke/:id**: Delete a specific joke by ID.

## Technologies Used

- Node.js
- Express.js (for handling HTTP requests)
- nodemon (for auto-restarting the server)

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
