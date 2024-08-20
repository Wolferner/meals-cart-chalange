# React Meals Cart Application

This is a small React application where users can add meals to a shopping cart. It was created as a mini-challenge to practice React fundamentals, including state management, components, and basic user interactions.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Application Description](#application-description)
- [Future Improvements](#future-improvements)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Wolferner/meals-cart-chalange.git
   ```

2. Navigate to the project directory:

   ```bash
   cd meals-cart-chalange
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the project in development mode, run:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **React DOM** - Library for working with the virtual DOM.
- **React Scripts** - A set of scripts to support React applications.

## Application Description

This mini application allows users to browse a list of meals, add meals to a cart, and view the total cost. It provides a simple demonstration of state management in React, component-based architecture, and event handling.

### Key Features

- Display a list of meals available for selection.
- Add meals to the cart with adjustable quantities.
- View the cart with all selected meals and total cost.
- Manage the cart state across different components.

### Example of Adding a Meal to the Cart

The following code snippet shows how to add a meal to the cart state:

```javascript
const addToCartHandler = (meal) => {
  setCartItems((prevItems) => {
    return [...prevItems, meal];
  });
};
```

## Future Improvements

- Add functionality to remove items from the cart.
- Implement form validation for meal quantities.
- Add animations and improved styling for a better user experience.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
