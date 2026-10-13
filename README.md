# Beachside Thrift

## Overview

Beachside Thrift is an online thrift store where users can list secondhand products up for sale and browse items from other users.

## Live Site

Visit the website: [Beachside Thrift](https://h4i-team6-bootcamp-2026.vercel.app/)

## Team

- Vincent Le - Tech Lead
- Aanya Chauhan- Software Developer
- Dane Stilinovich - Software Developer
- Destiny Lee - Software Developer
- Isaac Hey - Software Developer
- Joanna Li - Software Developer

## Tech Stack

- Next.js
- React
- TypeScript
- MongoDB Atlas
- Mongoose
- Vitest

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB Atlas connection string from our Tech Lead (Vincent)

### Installation

1. Clone the repository: git clone https://github.com/ShortVincentMan/h4i-team6-bootcamp-2026.git
2. Move into the project folder: cd h4i-team6-bootcamp-2026
3. Install dependencies: 'npm install'

### Environment Variables

Create a '.env.local' file in the project root and add your mongoDb atlas connection string:

'MONGO_URI=<your-mongodb-connection-string>'

Ask the Tech Lead (Vincent) for the development database credentials. Never commit '.env.local' or real credentials to GitHub

### Run the App

Start the development server:

'npm run dev'

Then open http://localhost:3000 in your browser.

## Available Commands

- 'npm run dev' - starts the development server.
- 'npm run build' - creates a production build.
- 'npm run lint' - checks the code for linting issues.
- 'npm test' - runs the test suite once.
- 'npm run test:watch' - runs tests in watch mode,
- 'npm run seed:products' - seeds the MongoDB database with product data.
