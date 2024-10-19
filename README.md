# Dynamic and Static Form Renderer Application

This repository contains an application built with **TypeScript** that supports both **static form generation** and **dynamic form generation** using React and Material-UI. The dynamic form renderer is highly configurable, supporting various field types and dynamic business logic. The application also integrates with **Jest**, **React Testing Library**, and **Storybook** for testing and interactive component documentation.

## Features

### Static Form Generation

- A simple, statically rendered form with predefined fields.
- Basic form handling and display without dynamic modifications.

### Dynamic Form Generation

The dynamic form renderer allows you to generate forms based on a configurable JSON structure. It supports various field types and dynamic behaviors, ensuring flexibility and type safety.

#### Supported Field Types

- **Text Input** (`textInput`): A simple text input field.
- **Integer Input** (`integerInput`): A number input field with optional min and max validation.
- **Dropdown Enum Selector** (`enumInput`): A dropdown field to select one option from predefined values.
- **Currency Input** (`currencyInput`): A combination of a currency selector and an amount input, displayed on a single line.

#### Business Logic Supported

- **Adding or Removing Fields**: Dynamically add or remove fields based on the provided configuration.
- **Reordering Fields**: Change the order of fields in the configuration, and the form will reflect these changes.
- **Changing Default Values**: Fields can be configured to read default values from the provided data structure, which can also be updated upon form submission.
- **Renaming Fields**: Easily update labels and field names in the configuration.

### TypeScript Advantages

- **Type Safety**: All components and business logic are built with TypeScript, providing robust type checking and minimizing runtime errors.
- **Scalability**: The TypeScript setup makes it easier to manage and scale the project, especially when dealing with dynamic forms and complex configurations.

### Testing with Jest and React Testing Library

- Unit tests are written using **Jest** and **React Testing Library** to validate the business logic.
- Tests cover input handling, form submission, and different configuration scenarios.
- Ensures that all configurations behave correctly and that the form responds dynamically.

### Storybook with a11y Addon

- **Storybook** is integrated to document and test the components in isolation.
- The **a11y (accessibility)** addon is included to check for accessibility issues and ensure best practices.
- Storybook allows previewing and interacting with the dynamic form using different configurations.

## Getting Started

### Prerequisites

- **Node.js** (v12.x or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. To run the application locally:

   ```
   npm start
   ```

4. Running Storybook

   ```
   npm run storybook
   ```

5. To run the unit tests with Jest:
   ```
   npm run test
   ```
