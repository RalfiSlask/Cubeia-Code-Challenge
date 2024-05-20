# Cubeia Code Challenge

## Screenshots

![image](https://github.com/RalfiSlask/Cubeia-Code-Challenge/assets/112242026/e026646b-ea0b-40e5-9401-ad9de74421ba)


## Tech Stack

### Frontend

- HTML5
- React
- Typescript
- Sass
- Tailwind

### Build Tools

- Vite

### Relevant Dependencies

- uuid
- vitest
- axios
- jsdom
- testing-library
- postcss

## Formatting

This projects uses code standards by applying the eslint and prettier tools:

- **Eslint**: identifies bugs and patterns to make the code more consistent.
- **Prettier**: code formatter for making the code more readable and consistent.

## How to use

- Step 1: Clone and download repo.
- Step 2: Install node_modules using npm i.
- Step 3: Create and use API Url, there is an example.env file in root.
- Step 4: Run script for vite (npm run dev) to launch the application.

## Status

This project is marked as "Finished"

## Challenge Description

This is a code challenge to build a casino lobby on a limited amount of time. The focus is mainly on logic and experience with React and a lite bit of UX. Orders is to fetch API and be able to filter games by studios, categories and currencies. These are connected to each other in the json data. 

## Features

- **Categories**: User can filter by category. 
- **Currency Modal**: Users can filter by a bunch of currencies. 
- **Studio Modal**: User can pick one or several studios. 
- **Load More**: Buttons for user to interact and load more or hide casino games. 

## Performance

- Chose to use load more functionality to improve performance.
- Used React.lazy on a bigger modal for studios.
- Used useMemo when filtering games to memoize it due to large data sample.
- Checked if the library react-window did any improvmenets on performance, but could not see it so i decided not to use it.

### Future Improvments (out of scope)

- Improve UI
- Accessibility
- SEO
- Further Performance improvment
- Animation Libraries
- Some images urls are not working

## Author

- [RalfiSlask](https://github.com/RalfiSlask)
