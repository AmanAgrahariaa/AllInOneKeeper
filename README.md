# All-in-One Keeper

![All-in-One Keeper](https://res.cloudinary.com/dh1qwb9tk/image/upload/v1690872412/landing_allinonekeeper_vjvezj.png)

## Introduction

All-in-One Keeper is a powerful full-stack web application designed to be your ultimate digital vault for managing various aspects of your online life. Seamlessly organize and access your essential information, including notes, web archives (bookmarks), and sensitive passwords, all within a secure and user-friendly interface.

Our mission is to simplify your digital life by providing a centralized platform for managing your valuable data, enhancing productivity, and promoting online security.

## Features

- **User Authentication**: Enjoy seamless and secure access to your All-in-One Keeper account with our robust authentication system. Sign up or log in via Google OAuth, or create an account with your email and password. To ensure an additional layer of security for your sensitive data in the password manager (VaultLock), we employ JSON Web Tokens (JWT) with cookies for authentication.

- **Notes Manager**: Take notes and organize them effortlessly. With our intuitive interface, you can create, view, update, and delete notes, streamlining your personal and professional life.

- **Web Archive (Bookmark Manager)**: Keep your favorite websites and online resources neatly categorized. Our Web Archive feature lets you save and access bookmarks with ease, making browsing a breeze.

- **VaultLock (Password Manager)**: Securely store and manage your passwords in our state-of-the-art VaultLock. Your sensitive information is protected with hashing and encryption for enhanced data security.

- **Responsive Design**: All-in-One Keeper is designed with responsiveness in mind, ensuring optimal performance and user experience across devices and screen sizes.
- **Forget Password Functionality**: Never worry about forgetting your password again! All-in-One Keeper features a password reset option for users who forget their passwords. Upon requesting a password reset, a reset token is sent via email, allowing users to securely reset their password.

## Folder Structure

Our project follows a well-organized folder structure:

- `server.js`: The main server file responsible for starting the application.
- `server`: Contains all server-related code and configurations.
  - `config`: Holds essential configuration files, such as database connection (`db.js`).
  - `controllers`: Houses route handlers and controllers for various functionalities, including Notes, Web Archive, and VaultLock.
  - `middleware`: Implements custom middleware functions for authentication, error handling, and more.
  - `models`: Defines database models (schemas) for User, Notes, Web Archive, and VaultLock.
  - `routes`: Contains route definitions for different application sections, such as `auth.js`, `index.js`, `dashboard.js`, `bookmark.js`, and `password.js`.
- `views`: Consists of EJS templates responsible for rendering pages.
  - `layout`: Holds the common layout template, including header, footer, etc.
  - `partials`: Reusable partial templates for header, footer, etc.
  - `dashboard`: Contains EJS templates for the dashboard functionality.
  - `webarchive`: Contains EJS templates for the bookmark manager (Web Archive).
  - `vaultlock`: Contains EJS templates for the password manager (VaultLock).
  - Other EJS templates for the landing page and error pages are also included.
- `public`: Contains static assets, including CSS, JavaScript, images, etc.
- Other project-related files, such as `.env`, `package.json`, `README.md`, etc., are present.

## Installation

To set up the project, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project folder: `cd all-in-one-keeper`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and set environment variables (e.g., database connection, Google OAuth credentials).

## Usage

1. Run the application: `npm start`
2. Access the application in your web browser at `http://localhost:5000/`

## Technologies Used

Our application harnesses the power of the following technologies:

- Node.js: A versatile server-side JavaScript runtime.
- Express.js: A popular web application framework for Node.js.
- MongoDB (Mongoose): A flexible and scalable NoSQL database for data storage.
- Passport.js (Google OAuth): A user authentication middleware for Node.js, enabling seamless Google login and signup.
- JSON Web Tokens (JWT): A secure method for transmitting information between parties, used for password manager (VaultLock) authentication.
- EJS (Embedded JavaScript): A templating engine for rendering dynamic HTML content.
- Bootstrap: A front-end framework for responsive and visually appealing web design.

## Hashing and Encryption

At All-in-One Keeper, we take data security very seriously. To safeguard your sensitive information, we implement both hashing and encryption techniques:

- Hashing: When you store your passwords in VaultLock, we hash them using strong and salted cryptographic algorithms. Hashing converts your plain-text passwords into irreversible hashed values, ensuring that even we, as service providers, cannot access your original passwords.

- Encryption/Decryption: Alongside hashing, we employ encryption techniques to secure your data at rest. Before storing your notes and Web Archive entries in the database, we encrypt them using robust encryption algorithms. When you need to view or edit this data, we decrypt it only for authorized users, enhancing data privacy and security.

## Our Values

1. **Security First**: We prioritize the security and privacy of your data above all else. Our commitment to using industry-leading encryption and authentication practices ensures your information remains safe from prying eyes.

2. **User-Centric Design**: Our user interface and experience are thoughtfully designed to offer a seamless and intuitive platform, making your journey with All-in-One Keeper enjoyable and efficient.

3. **Simplicity and Productivity**: We aim to simplify your digital life by providing an all-inclusive solution that empowers you to be more productive and organized.

## Frequently Asked Questions (FAQ)

#### Q: Is my data safe with All-in-One Keeper?

A: Yes, your data is secure with us. We employ robust encryption and hashing techniques to protect your sensitive information.

#### Q: Can I access All-in-One Keeper on my mobile device?

A: Absolutely! All-in-One Keeper is designed to be responsive, offering a smooth experience on various devices, including mobile phones and tablets.

#### Q: How does the password manager (VaultLock) keep my passwords safe?

A: VaultLock uses advanced hashing techniques to store your passwords in an irreversible format. This means that even we, as service providers, cannot view your actual passwords. Additionally, VaultLock employs an extra layer of security with JSON Web Tokens (JWT) for enhanced authentication.

## Contributing

We welcome contributions to enhance our platform further. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b my-new-feature`
3. Make changes and commit them: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Contact

For any inquiries or suggestions, please contact Aman Agrahari(mailto:agraharia329@gmail.com). We would love to hear from you!
