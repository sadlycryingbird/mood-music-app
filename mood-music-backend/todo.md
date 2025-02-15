# Mood Music App - Backend To-Do List

## Setup the Node.js Project
- [X] Initialize a Node.js project with Express and TypeScript.
- [X] Set up `tsconfig.json` for TypeScript configuration.
- [X] Install required dependencies.
- [X] Set up Express with basic routing.
- [X] Create an `.env` file to manage environment variables.
- [X] Use `nodemon` for automatic server restarts during development.

## Authentication with Spotify API
- [ ] Register an app on the **Spotify Developer Dashboard**.
- [ ] Obtain `client_id` and `client_secret`.
- [ ] Implement OAuth 2.0 authorization flow.
- [ ] Store and refresh Spotify access tokens.

## Building API Endpoints
- [ ] Create an endpoint for **fetching available moods**.
- [ ] Create an endpoint that maps moods to Spotify genres.
- [ ] Create an endpoint that fetches songs from Spotify based on the mood.
- [ ] Implement error handling and API rate limits.

## Storing User Data (MongoDB)
- [ ] Set up MongoDB and connect it to the backend.
- [ ] Create a `User` model to store user-selected moods and playlists.
- [ ] Implement database functions for saving and retrieving user preferences.
- [ ] Add authentication if users need to save their playlists.

## Deploying the Backend
- [ ] Choose a hosting provider (Render, Vercel, AWS, or DigitalOcean).
- [ ] Set up environment variables in production.
- [ ] Connect backend to the frontend.
- [ ] Test and optimize API performance.