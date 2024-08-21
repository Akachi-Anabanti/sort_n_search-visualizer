# Sorting Visualizer

Welcome to the Sorting Visualizer app! This application provides an interactive way to visualize various sorting algorithms using a dynamic, responsive user interface. It allows users to see how different sorting algorithms operate step-by-step on random arrays.

## Features

- **Visualize Sorting Algorithms**: Watch how different sorting algorithms sort an array in real-time.
- **Support for Multiple Algorithms**: Includes popular sorting algorithms like Bubble Sort, Selection Sort, Merge Sort, Quick Sort, Insertion Sort, Heap Sort, and Radix Sort.
- **Dynamic Array Generation**: Generate arrays of varying sizes and values.
- **Adjustable Speed**: Control the speed of the sorting animation.
- **Responsive Design**: The app is designed to adapt to different screen sizes.

## Algorithms Included

- **Bubble Sort**
- **Selection Sort**
- **Merge Sort**
- **Quick Sort**
- **Insertion Sort**
- **Heap Sort**
- **Radix Sort**

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   git clone https://github.com/Akachi-Anabanti/sorting-visualizer.git

2. Navigate to the project directory:

   cd sorting-visualizer

3. Install dependencies:

   npm install

4. Start the development server:

   npm start

   The app will be available at http://localhost:3000 by default.

## Usage

1. **Select an Algorithm**: Use the dropdown menu to choose which sorting algorithm to visualize.
2. **Adjust Array Size**: Use the slider in the controls dropdown to change the size of the array.
3. **Adjust Speed**: Use the slider to set the speed of the sorting animation.
4. **Randomize Array**: Click the "Randomize" button to generate a new random array.
5. **Start Sorting**: Click the "Sort" button to start visualizing the selected sorting algorithm.

## Components

- **Sorting**: Main component that handles the logic for selecting algorithms, generating arrays, and controlling the visualization.
- **Bars**: Component for rendering the array as a series of bars.
- **CodeMarkdown**: Component to display the code of the selected sorting algorithm for educational purposes.

## Project Structure

- `src/`: Contains the source code.
  - `algorithms/`: Folder with sorting algorithm implementations.
  - `components/`: React components used in the app.
  - `utils/`: Utility functions and constants.
- `public/`: Static assets such as `index.html`.

## Contributing

Contributions are welcome! Please submit issues and pull requests via GitHub. If you have suggestions or improvements, feel free to create a new issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Inspired by the [Algorithm Visualizer](https://github.com/arnabuchiha/Algorithm-Visualizer) project by [arnabuchiha](https://github.com/arnabuchiha). Thanks to the contributors and maintainers of that project for the inspiration!

Happy sorting!

---

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
