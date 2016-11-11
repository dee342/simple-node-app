1.  npm install
2.  node server -- Server is running on http://localhost:1336/index.html


Develop a simple Node.JS application to use the following technologies:

- HTML 5 and CSS3.
- jQuery
- Grunt
- Use NPM to install the libraries needed in this app.

This application needs to display a simple web page based on a simple http request call. In other words, we need to be able to invoke this application from the web browser. This app will receive the request and log a simple message "http request received" on the application console. After that, the app has to return a http response containing HTML code. This web page will have to display 3 DOM elements. A title, a input text field and a button. The title has to read "Welcome to Node.JS" and right below, also centralized, an input text field followed by a button that reads "Submit".

By using jQuery, on a separate javascript, you will need to implement an event handler that will be called when you click "Submit". This function will read the input data value and based on it, it will have to make an asynchronous Ajax call to the node application.  Node then will have to log the value on the console as "Logging data : <value>. You will then return a response as "Data logged on the server : <value>". Use a jQuery call back method to display that message on the web application.

Use CSS and HTML to format the format and layout of the page as you wish. The idea is to show that you can use DIV and applying different colors as you wish on the text elements of the page.

Please implement some tasks in grunt to watch or setup components as needed for your application.
