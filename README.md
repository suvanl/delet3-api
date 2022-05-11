# delet3 API

This is the REST API used by [delet<sup>3</sup>](https://github.com/suvanl/delet3) for interacting with its MongoDB database.

## Installation and Initial Setup
You must have Node.js installed. Node can be installed from [nodejs.org](https://nodejs.org/). Using the latest LTS version is recommended.

Once you have installed Node, follow these steps to get started with this project:
1. Clone or download this repository, and `cd` into the newly created directory:
    ```
    $ git clone https://github.com/suvanl/delet3-API.git
    ```

    ```
    $ cd delet3-API
    ```

2. Install all required dependencies:
    ```
    $ npm install
    ```

    Alternatively, you may skip devDependencies:
    ```
    $ npm install --production
    ```
3. Rename `.env.example` to `.env`
4. Add values for all environment variables in the `.env` file.

## Starting the Server
To start the REST API server:

- Without watch/reload:
    ```
    $ npm start
    ```

- Without with watch/reload from nodemon:
    ```
    $ npm run dev
    ```

## Licence
This project is licensed under the MIT licence. See LICENSE.md in the project root for more information.
