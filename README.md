# YouTube Clone with React, Redux, and YouTube API

This project is a YouTube clone built using React, Redux, and the YouTube API. It aims to replicate some of the core functionalities of YouTube, including video playback, live chat through API polling, nested comments, search functionality, and an active button feature.

![Youtube-Retouch](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTh4aHVuaHBqYWc4bnU2YnFwY3Z3MWQxaWh3MDlmeDJhN21yajlraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13Nc3xlO1kGg3S/giphy.gif)

[Live Demo](https://youtube-retouch.vercel.app/)

## Features

1. Video Playback
   Users can watch videos seamlessly through the YouTube API integration. The application provides a smooth video playback experience similar to the original YouTube platform.

2. Live Chat
   The live chat feature allows users to engage in real-time conversations while watching videos. It utilizes API polling to fetch and display new messages as they are posted by other users.

3. Nested Comments
   Users can leave comments on videos, and the application supports nested comments for more organized discussions. Comments can be replied to, creating a threaded conversation structure.

4. Search Functionality
   The search functionality enables users to find videos based on keywords or phrases. The application leverages the YouTube API's search capabilities to retrieve relevant videos matching the user's query.

5. Active Button
   The active button feature enhances user interaction by providing visual feedback when buttons are clicked or interacted with. It improves the overall user experience by indicating the active state of buttons.

## Installation

- Clone the repository:

  `git clone https://github.com/ankit1324/YOUTUBE-RETOUCH.git
`

- Navigate to the project directory:
  `cd my-youtube`

- Install dependencies: `npm install`

- Set up the YouTube API credentials by obtaining an API key from the YouTube Developer Console.

- Replace YOUR_API_KEY in the project's configuration file with your actual API key.

## Usage

- Start the development server: `npm start`

- Access the application in your web browser at `http://localhost:3000`

> Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- YouTube API: Provides access to YouTube's data, functionality, and metadata.
- HTML/CSS: Standard markup and styling languages for web development.
- JavaScript: The programming language used for client-side scripting.

## Project Structure

```
│
│
├── src/
│ ├── components/ # React components
│ ├── utils/ # Utility functions
│ │    ├── constants/ # API constants
│ │    ├── actions/ # Redux actions
│ │    ├── Store/ # Redux store
│ │    ├── reducers/ # Redux reducers
│ │    ├── helper/ #Helper function
│ ├── App.js # Main application component
│ └── index.js # Entry point
│
├── public/ # Static assets
│ ├── index.html # HTML template
│ └── ...
│
├── .gitignore # Git ignore file
├── package.json # Node.js package configuration
└── README.md # Project documentation
```

> App Flow

- App
  - Header
    - Search
      - SearchList
  - Body
    - SideBar
      - MenuItems
    - Main Container
      - ButtonsList
      - VideoContainer
        - VideoCart

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

![contribution](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXhjaXNmbDRybTNzOWkyOW84aGx5cXFuYWt4amd2dDhiMmw0NjQ0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1kkxWqT5nvLXupUTwK/giphy.gif)
