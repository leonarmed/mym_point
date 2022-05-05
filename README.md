# Landingpage of M&M Point - Paraguay

This project was created with React + Typescript using mui material as css library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

The page will reload if you make edits.

### `npm run build:production`

Creates a build directory with a production `dist` folder of your app . Basicly we are using mympoint.com/site as root directory, in case you need to change the directory, is important do it in homepage of package.json and publicPath of webpack.config.production.js.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:staging`

Create same directory as production to test in another docker.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Integration with API

**Only have one integration that is used to send email of client suggestions. This API would receive an object with two string parameters. First is an remitent email and second is an suggestion.**
