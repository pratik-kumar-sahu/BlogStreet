Live Link: [BlogStreet](https://blogstreet.herokuapp.com/)

# Blogstreet

**BlogStreet is a blog based web-app. The sole purpose of making this is that a user can perform CRUD operations easily. A user can sign up/ login and start making content. Users can also update, delete his/her blogs anytime. Every blog has a comment and a profile section. Any user can comment, but he/she needs to log in for this. Profile section will give details about a specific user. Apart from this, Report and more required options will be available to a reader.**

---

# Project Authors

Check Us Out

[Pratik Sahu](https://github.com/pratik-sahu-au13) & [Abhik Dey](https://github.com/abhik-dey-au13)

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

---

### Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

You can install nodejs and npm easily with apt install, just run the following commands.

$ sudo apt install nodejs

$ sudo apt install npm

- #### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```
$ node
-v14.15.3

$ npm
-v6.14.9
```

---

## Project Installation

After installing node, this project will need many NPM Packages, so just run the following command to install all.

$ git clone (https://github.com/pratik-sahu-au13/BlogStreet.git)

$ cd BlogStreet/

$ npm install

---

## Running The Project

```sh
$ npm start
```

## NPM Packages Used -

- ##### `bcryptjs` - We are using bcrypt.js module to hash password of the user. It’s an npm module that you can find it out here at [bcryptjs](https://www.npmjs.com/package/bcryptjs).

- ##### `dompurify` - We are using dompurify to sanitize HTML and prevent XSS attacks. [DOMPurify](https://www.npmjs.com/package/dompurify).

- ##### `jsdom` - We are using the jsdom module to access the window() function for the dom-purification feature . [jsdom](https://www.npmjs.com/package/jsdom).

- ##### `marked` - We are using marked to fomat plain texts into markdown. [Marked](https://www.npmjs.com/package/marked).

- ##### `method-override` - We are using the method-override module to a POST request to delete a particular blog . [method-override](https://www.npmjs.com/package/method-override).

- ##### `connect-flash` - It is used for the flash messages, you can look for more details here [connect-flash](https://www.npmjs.com/package/connect-flash).

- ##### `ejs` - It is the Embedded JavaScript templates. This is the view engine we used in our project. You can find more details here [ejs](https://www.npmjs.com/package/ejs).

- ##### `express` - It's the web framework for Node.js that we used to structure our web application. You can find more details here [express](https://www.npmjs.com/package/express).

- ##### `express-session` - It's for the storage of the cookies. Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side. For more details check here [express-session](https://www.npmjs.com/package/express-session).

- ##### `mongoose` - We used Mongoose because it provides schema-based solution to model our application data with MongoDB. Which has many features to use example - validation of user's data. For more details check here [mongoose](https://www.npmjs.com/package/mongoose).

---

## Project Demo Website Hosted On Heroku -

- #### Visit Here [BlogStreet](https://blogstreet.herokuapp.com/)

## 📝 License

Copyright © 2021 [Pratik Sahu](https://github.com/pratik-sahu-au13) & [Abhik Dey](https://github.com/abhik-dey-au13).
