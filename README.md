# Would You Rather
This is a Website where users can make new polls and other users can vote. Users can see the results only after submission.
There is a leaderboard where the most helpful users are shown.
This project is the final assessment project for Udacity's React-Redux course.

## Up And Running
### On Your Local Machine:
To get started:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

[Yarn installation](https://classic.yarnpkg.com/en/docs/install)

### Using Docker
1. in the root of the project run:
`docker build -t your-image-name .` to build the image.
2. `docker run -d -p 3000:3000 --name your-container-name your-image-name` to run the container in the background
3. go to `http://localhost:3000/`
4. Enjoy using the app!

# Folder Structure

Refer to the following table for information about important directories and files in this repository.

```
would-you-rather
├── public               Used By React App.
├── src                  Source files.
    ├── actions          actions passed to Redux reducers.
    ├── components       React components.
    ├── middleware       functions called before reducers.
    ├── reducers         reducers used by Redux to manage state.
    └── utils            simulates database.

├── README.md            main documentation.
├── package.json         used by npm for managing dependencies.
└── yarn.lock            used by yarn for managing dependencies.
```

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Redux
State is managed by [Redux](https://github.com/reduxjs/redux) and logs are shown in the console for debugging purposes using the logger [thunk](https://github.com/reduxjs/redux-thunk).
