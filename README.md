# Express and React in Monorepo for Vercel

This is a sample project that demonstrates how to create a monolithic Express and React application that can be deployed to Vercel.

## Project Structure

-   `api`: Contains the Express backend.
-   `client`: Contains the React frontend.
-   `vercel.json`: Vercel configuration file.
-   `package.json`: Root package.json to manage both frontend and backend.

## Installation

1.  Clone the repository.
2.  Install the dependencies from the root directory:

    ```bash
    npm install
    ```

## Development

To run both the frontend and backend development servers, run the following command from the root directory:

```bash
npm run dev
```

This will start the React development server on `http://localhost:3000` and the Express server on `http://localhost:3001`.

## Building for Production

To build the application for production, run the following command from the root directory:

```bash
npm run build
```

This will create a `build` directory in the `client` directory with the production-ready assets.

## Deployment

This project is configured for deployment on Vercel. To deploy, you can use the Vercel CLI or connect your Git repository to Vercel.
