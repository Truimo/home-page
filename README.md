# Home Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Development

Runs the app in the development mode.

```shell
npm start
```

### Production

Builds the app for production.

```shell
npm run build
```

## Nginx pseudo static configuration

```
location / {
  try_files $uri $uri/ /index.html;
}
```
