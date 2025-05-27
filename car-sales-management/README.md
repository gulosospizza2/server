# Car Sales Management

This project is a web application for managing car sales. It allows users to register, log in, and manage a list of available cars. The application is built using Node.js, Express, and EJS for rendering dynamic pages.

## Features

- User registration and login
- List available cars
- Manage cars (add, update, delete)
- Sell cars and update available quantity
- Responsive design with CSS

## Project Structure

```
car-sales-management
├── src
│   ├── controllers          # Contains the logic for handling requests
│   │   ├── carController.js
│   │   └── userController.js
│   ├── models               # Defines the data models
│   │   ├── car.js
│   │   └── user.js
│   ├── routes               # Defines the application routes
│   │   ├── carRoutes.js
│   │   └── userRoutes.js
│   ├── views                # EJS templates for rendering pages
│   │   ├── Projects.ejs
│   │   ├── carros.ejs
│   │   ├── cadastroUsuario.ejs
│   │   ├── login.ejs
│   │   ├── listarCarros.ejs
│   │   ├── gerenciarCarros.ejs
│   │   ├── cadastrarCarro.ejs
│   │   ├── atualizarCarro.ejs
│   │   └── venderCarro.ejs
│   ├── public               # Static files (CSS, JS)
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       └── main.js
│   └── app.js              # Entry point of the application
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd car-sales-management
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```

## Usage

- Access the application in your web browser at `http://localhost`.
- Register a new user or log in with existing credentials.
- Manage the list of cars, including adding, updating, deleting, and selling cars.

## License

This project is licensed under the MIT License.