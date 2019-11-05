# graphql-training

Learn the basics of GraphQL by deploying a simple GraphQL serverless function.

## Getting started

Install `now`. We'll be using this for deployment.

```
yarn global add now
```

You'll need to create an account. You can do this on [zeit.co](https://zeit.co/).

## Development

Even though we're building a serverless function, we want to be able to serve this locally so we can hit it at `http://localhost:3000`. To run the local server by running:

```
yarn install
```

Then:

```
now dev
```

## Deployment

Simply run:

```
now
```

And visit the URL provided, e.g. `https://graphql-training.now.sh/`
