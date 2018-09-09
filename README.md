## Website for College of Engineering Adoor

[GitHub Page](https://ceadoor.github.io/cea.ac.in/)

### Contribute?

```
Fork this Repository and request a PR after commits.
```

### Ideas?

```
Create a regular issue.
```

# Quick start

Install nodejs and npm
  
Clone the repo

    git clone https://github.com/shaminmeerankutty/webpack-sass-bootstrap-boilerplate.git

Install All Packages

    npm install

Starting Developement Environment (Check the browser at http://localhost:8080/)

    npm start

Building files

    npm run build

# How to use

- Add your html files in the `src` directory (By default `index.html` is added to your `src` directory, feel free to edit it)

  - Make sure you add it in your `webpack.config.js` (Replace `name` with your `filename`)

    ```javascript
    plugins: [
        ...
        new HtmlWebpackPlugin({
            template: 'src/name.html',
            inject: 'body',
            filename: 'name.html'
        }),
        ...
    ],
    ```

- Add images to your `src/assets` folder
- Add sass files to `src/scss` folder

  - Make sure you import the scss file in `main.scss`

    ```sass
    @import "filename";
    ```
