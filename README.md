# Book Bazaar

A website that is made for those up and coming authors who don't have the money to pay for a publisher. Can easily upload your books to book bazaar and start making sales and a profit. It's also for those readers who are looking for a different author.

## Tech Stack

**Client:** React, HTML, CSS, JavaScript, User Authentication,JWT

**Server:** Node, Express, MySQL, Knex, API, JWT

## Features

- Filter books by genre
- Signup
- Login
- Purchase books
- Upload books

## Installation

CLIENT INSTALLS

requires:
https://github.com/jessemcc/Book_Bazaar_server

```bash
  npm i
```

SERVER INSTALLS

requires:
https://github.com/jessemcc/Book_Bazaar_client

```bash
    npm i
    npm run migrate:up
    npm run seed
    npm start
```

## API Reference

#### Get all books

```http
  GET /books
```

| Parameter | Type   | Description           |
| :-------- | :----- | :-------------------- |
|           | `json` | Get list of all books |

#### Get specific book

```http
  GET /books/${bookid}
```

| Parameter | Type   | Description                       |
| :-------- | :----- | :-------------------------------- |
| `bookid`  | `json` | **Required**. Id of item to fetch |

#### Get all authors

```http
  GET /authors
```

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
|           | `json` | Get list of all authors |

#### Get specific author

```http
  GET /authors/${authorid}
```

| Parameter  | Type   | Description                       |
| :--------- | :----- | :-------------------------------- |
| `authorid` | `json` | **Required**. Id of item to fetch |

#### Get author with books

```http
  GET /authors/&{authorid}/books
```

| Parameter  | Type   | Description                             |
| :--------- | :----- | :-------------------------------------- |
| `authorid` | `json` | Get author with list of all their books |

#### Add item to cart

```http
  POST /cart
```

| Parameter | Type   | Description      |
| :-------- | :----- | :--------------- |
|           | `json` | Add item to cart |

#### Get items from cart

```http
  GET /cart
```

| Parameter | Type   | Description         |
| :-------- | :----- | :------------------ |
|           | `json` | Get items from cart |

#### Delete item from cart

```http
  DELETE /cart
```

| Parameter | Type   | Description           |
| :-------- | :----- | :-------------------- |
|           | `json` | Delete item from cart |

#### Delete all items from cart

```http
  DELETE /delete
```

| Parameter | Type   | Description                |
| :-------- | :----- | :------------------------- |
|           | `json` | Delete all items from cart |

#### Login to website

```http
  POST /login
```

| Parameter | Type   | Description      |
| :-------- | :----- | :--------------- |
|           | `json` | Login to website |

#### Add item to cart

```http
  POST /signup
```

| Parameter | Type   | Description      |
| :-------- | :----- | :--------------- |
|           | `json` | Add a new author |

## Screenshots

<img src="https://user-images.githubusercontent.com/34747378/218562878-f0c08545-569b-4125-9cb3-465b7202b31d.png" />
<img src="https://user-images.githubusercontent.com/34747378/218562918-7ba79c80-2108-4892-8702-60caddf2a77a.png" />
<img src="https://user-images.githubusercontent.com/34747378/218562963-5bf074f9-2bab-4784-8256-8c994aa949a3.png" />
<img src="https://user-images.githubusercontent.com/34747378/218562974-8b4657b4-3035-4fc3-aedd-76bd9adf6234.png" />
<img src="https://user-images.githubusercontent.com/34747378/218562992-d2006e3d-ef48-4e4a-a93a-932ec4f5bdd8.png" />
<img src="https://user-images.githubusercontent.com/34747378/218563016-202af9b8-36e2-4db7-ac1a-8abc29a4b9e3.png" />
<img src="https://user-images.githubusercontent.com/34747378/218563037-7b8e9c2e-74fc-47ee-a059-ea3164cb98b3.png" />
<img src="https://user-images.githubusercontent.com/34747378/218563046-4fde2a1e-5768-4dec-8096-60f2a0fae399.png" />
<img src="https://user-images.githubusercontent.com/34747378/218563055-a49cc9aa-c753-4a77-b9cc-6a0f45765e79.png" />

## Lessons Learned and Things to Come

I learned a lot about making my own knex table for MySQL and how time ocnsumming it can be to make seeds. I learned a lot about manaing a cart for an e-commerce experience. Definetly have come to understand how quickly creating an api for your database can expand to many types of requests for different specific information. Improved on a lot of my client-side abilities as well when it comes to creating cards and maps and data manipulation.

Some things I am planning on implementing or improving in book bazaar is as follows:

1. Adding a profile page where you can edit your profile information.
2. Adding an upload book page accessed through your profile page so you can add a new book.
3. Add a dropdown menu for the provinces in the signup page
4. Find a library to help with the city and address validation.
5. Use something other than alerts for notifications throughout page.
6. Incorporate stripe for checkout.
7. Add book demo's to read first chapter for free to see if you're interested.
