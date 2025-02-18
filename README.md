# Digital Clock App

## Project Description

A **simple and elegant** Digital Clock Application built using **React**. This app displays the **current time**, dynamically updated every second, with a **sleek and modern design**.

## Features

- **Real-Time Clock:** Displays the current **hour, minute, and second** in **12-hour format** with AM/PM indication.
- **Responsive Design:** Adapts beautifully to any screen size with a centered layout.
- **Styling:**
  - Monospace font for a **classic digital clock feel**.
  - Blurred background effect for **enhanced aesthetics**.
  - Clean and minimalistic design with **dark theme**.

## Code Overview

### React Components

#### `DigitalClockApp`
- Manages the clock state using the **useState** and **useEffect** hooks.
- Updates the clock every second with the help of `setInterval`.
- Formats time in **12-hour format** and ensures **leading zeros** using a helper function.

#### `App`
- Wraps and renders the **DigitalClockApp** component.

### Styling

- Written in **CSS** to ensure a **modern and visually appealing interface**:
  - **Dark background** with a subtle **blurred effect**.
  - **Large, bold, and centered clock text** for better readability.
  - **Text shadow** for a soft **glowing effect**.

## Key Methods

- `formatTime()`: Converts the current time into a **user-friendly 12-hour format** with AM/PM.
- `padZero(number)`: Ensures **single-digit numbers** are padded with a **leading zero**.

## How to Run

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the project directory:**
   ```sh
   cd digital-clock-app
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the application:**
   ```sh
   npm start
   ```
5. **Open your browser** and visit **http://localhost:3000** to see the Digital Clock App in action.

## Folder Structure

```
├── App.js               # Main app component
├── DigitalClockApp.jsx  # Digital clock component
├── index.js             # Entry point
├── App.css              # Styling
└── index.css            # Global styles
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
