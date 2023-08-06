
# Cow Hut Server API Documentation

Welcome to the Cow Hut Server API documentation! This API provides endpoints for managing users, cows, and orders for the Cow Hut application.

# [Live link](https://cow-hut-server-mazdul1000.vercel.app/)

## Base URL

The base URL for all endpoints is `https://cow-hut-server-mazdul1000.vercel.app/`.

## Authentication
User sign up.
### Create new user


- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/auth/signup`
- **Method**: `POST`
- **Description**: Create new user to the database.


## Users

Manage user information.

### Get all users

Retrieve a list of all users.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/users`
- **Method**: `GET`
- **Description**: Retrieves a list of all users.

### Get a single user

Retrieve information about a single user.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/users/:id`  ( Include an id that is saved in your database)
- **Method**: `GET`
- **Description**: Retrieves a single user by their ID.

### Update a user

Update user information.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/users/:id`  ( Include an id that is saved in your database)
- **Method**: `PATCH`
- **Description**: Updates a user by their ID.

### Delete a user

Delete a user.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/users/:id`  ( Include an id that is saved in your database)
- **Method**: `DELETE`
- **Description**: Deletes a user by their ID.

## Cows

Manage cow information.

### Create a cow

Create a new cow.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows`
- **Method**: `POST`
- **Description**: Creates a new cow.

### Get all cows

Retrieve a list of all cows.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows`
- **Method**: `GET`
- **Description**: Retrieves a list of all cows.

### Get a single cow

Retrieve information about a single cow.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows/:id`  ( Include an id that is saved in your database)
- **Method**: `GET`
- **Description**: Retrieves a single cow by its ID.

### Update a cow

Update cow information.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows/:id`  ( Include an id that is saved in your database)
- **Method**: `PATCH`
- **Description**: Updates a cow by its ID.

### Delete a cow

Delete a cow.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows/:id`  ( Include an id that is saved in your database)
- **Method**: `DELETE`
- **Description**: Deletes a cow by its ID.

## Pagination and Filtering routes of Cows

### Pagination

Retrieve a paginated list of cows.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows?page=1&limit=10`
- **Method**: `GET`
- **Description**: Retrieves a paginated list of cows. Specify the page number and limit in the query parameters.

### Sorting

Retrieve a sorted list of cows.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows?sortBy=:field&sortOrder=:order`
- **Method**: `GET`
- **Description**: Retrieves a sorted list of cows. Specify the sort field and order in the query parameters.

### Filtering by Price

Retrieve a filtered list of cows based on price range.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows?minPrice=:minPrice&maxPrice=:maxPrice`
- **Method**: `GET`
- **Description**: Retrieves a filtered list of cows within the specified price range.

### Filtering by Location

Retrieve a filtered list of cows based on location.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows?location=Dhaka`
- **Method**: `GET`
- **Description**: Retrieves a filtered list of cows within the specified location.

### Filtering Search Keywords

Retrieve a filtered list of cows based on search keyword.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/cows?searchTerm=Cha`
- **Method**: `GET`
- **Description**: Retrieves a filtered list of cows based on a specified ***searchTerm***. The search will be performed within the cow list, considering the properties such as category, breed, and location.

## Orders

Manage order information.

### Create an order

Create a new order.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/orders`
- **Method**: `POST`
- **Description**: Creates a new order.

### Get all orders

Retrieve a list of all orders.

- **Route**: `https://cow-hut-server-mazdul1000.vercel.app/api/v1/orders`
- **Method**: `GET`
- **Description**: Retrieves a list of all orders.

