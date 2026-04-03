# Refactor Notes

## Initial State

The application was originally built using a single JavaScript file with mixed responsibilities:

- DOM manipulation
- Application logic
- State management
- Local storage handling

This made the code harder to maintain and scale.

---

## Refactoring Goals

- Improve code organization
- Separate concerns
- Make the code more readable and maintainable
- Simulate real-world development practices

---

## Changes Implemented

### 1. Modularization

The codebase was split into multiple files:

- app.js → orchestrates the application
- dom.js → handles UI rendering and DOM interactions
- storage.js → manages localStorage
- filter.js → contains filtering logic

---

### 2. Separation of Concerns

Each module now has a single responsibility, improving readability and scalability.

---

### 3. Improved Naming

Variables and functions were renamed to better reflect their purpose.

---

### 4. Input Validation

Added validation to prevent empty tasks from being added.

---

## Outcome

The application maintains the same functionality but is now:

- Easier to understand
- Easier to extend

---

## Real-world relevance

This refactor simulates working with legacy code and improving it without breaking existing functionality.
