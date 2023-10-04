# This is an assessment from Qventus

Please run `npm start` to get the application running.

The <Login /> component can be re-used anywhere as pleased with different validation requirements.

Right now the only requirents to validate are check for special characters, digits, uppercases and consecutive letters.

Example to add all the available validations:

```JavaScript

const passwordReqs = {
    specialCharacters: true,
    digits: true,
    uppercase: true,
    noConsecutive: true
};

function App() {
    return (
        <div className='App'>
            <Login {...passwordReqs} />
        </div>
    );
}

```

Example to validate only digits and special characters:

```JavaScript

const passwordReqs = {
    specialCharacters: true,
    digits: true
};

// OR

const passwordReqs = {
    specialCharacters: true,
    digits: true,
    uppercase: false,
    noConsecutive: false
};

function App() {
    return (
        <div className='App'>
            <Login {...passwordReqs} />
        </div>
    );
}

```

Please run `npm run build` to get a deployment version and `serve -s build` to run it

# Testing

The Login component has a testing [file](./src/components/login/Login.test.tsx) that can be used to test input values and validate them to check if the functions are working correctly.
It also checks if the validation labels appear on the page, depending on the passwordReqs values.

Run `npm test` to get the test running.

# Suggestions

Here is a list with the following suggestion for future development:

-   The design needs to be improved
-   The password form also needs a submit button for further validations and submition.
-   Additional validations can be added such as minimun and maximun password length and retype password

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
