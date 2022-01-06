## Description
Demo using nestJS, TypeORM and Graphql.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ DATABASE_URL=<POSTGRES_DATABASE_URL> npm run start

# watch mode
$ DATABASE_URL=<POSTGRES_DATABASE_URL> npm run start:dev

# production mode
$ DATABASE_URL=<POSTGRES_DATABASE_URL> npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Graphql local test
http://localhost:3000/graphql

## Graphql online test
https://right-paw-example.herokuapp.com/graphql
## Graphql Example:
```
{
  users(pageIndex: 0, pageSize: 5) {
    id,
    email,
    petExperience,
    State,
    firstName,
    lastName,
  }
}
```
```
{
  filter(petExperience: true, email: "charliebrown@mailinator.com", name: "Charlie Brown") {
    id,
    email,
    petExperience,
    firstName,
    lastName,
    State,
  }
}
```
