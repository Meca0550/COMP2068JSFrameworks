## express api portfolio

This project is a REST-style Portfolio API built using Node.js, Express, and TypeScript.

The API provides JSON endpoints that represent personal portfolio data, including:

Profile information
About details
Projects
Contact messages

All data is stored in memory and no database is used.


live deployment

Live URL:

https://comp2068jsframeworks-o8pu.onrender.com

Example:

https://comp2068jsframeworks-o8pu.onrender.com/api/about


## How to Run the Project Locally

1. Navigate to the project folder:

cd ASSIGNMENT01


2. Install dependencies:

npm install


3. Build the project:

npm run build


4. Start the server:

npm start


5. Open in browser:

http://localhost:3000/api/profile

## API Endpoints

### GET /api/profile
Returns profile information.

Example:

http://localhost:3000/api/profile



### GET /api/about
Returns about information.

Example:


http://localhost:3000/api/about



### GET /api/projects
Returns list of projects.
Example:
http://localhost:3000/api/projects


##citations 
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
https://www.geeksforgeeks.org/node-js/how-to-run-node-express-on-a-specific-port/