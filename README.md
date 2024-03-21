# Scissor

Scissor is a simple web application that allows users to shorten URLs and retrieve original URLs from shortened ones. It also provides functionality to generate QR codes for shortened URLs, view link history, and get analytics on URL clicks.

## Features

- Shorten long URLs to create shorter, more manageable links.
- Retrieve original URLs from shortened links.
- Generate QR codes for shortened URLs to enable easy sharing.
- View link history to track all shortened URLs.
- Get analytics on the number of clicks for each shortened URL.

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and define the following environment variables:

    ```plaintext
    PORT=****
    DB_URL=dialect://host:port/db_name
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## Usage

- Access the web application through your browser at `http://localhost:${PORT}`.
- Enter a long URL in the provided input field and click the "Shorten" button to generate a shortened URL.
- Click on the shortened URL to copy it to your clipboard or share it.
- Use the "Generate QR Code" button to generate a QR code for a shortened URL.
- View the link history to see all previously shortened URLs.
- Get analytics on the number of clicks for each shortened URL by entering the shortened URL in the provided input field and clicking the "Get Analytics" button.

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
