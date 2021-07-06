[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Stealth Code `Backend`

## Tools Used

* Mongoose User schema and model
* Settings for the database
* Passport and passport-jwt for authentication
* JSON Web Token
* Passwords that are hashed with BCrypt

## MODELS

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| timesLoggedIn | Number | used to track the amount of times a user logs in |
| date | Date | Auto-generated |


### Snippet Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ | 
userID | Integer | Auto-generated |
| title | String | Must be provided |
| body | String | Must be provided |
| language | String | Must be provided  |
| dependencies | String | Optional |
| image | String | built out for future use

## ROUTES

### User Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | app.js | Server file |
| GET | /api/users/test | users.js | Return json data |
| POST | /api/users/login | users.js | Login data |
| POST | /api/users/signup | users.js | Signup data |
| GET | /api/users/profile | users.js | Profile data |
| GET | /api/users/all-users | users.js | Get all users |

### Snippet Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | /api/snippets/ | snippets.js | Index |
| GET | /api/snippets/:id | snippets.js | Return json data |
| POST | /api/snippets/ | snippets.js | Create data |
| PUT | /api/snippets/:id | snippets.js | Update data |
| DELETE | /api/snippets/:id| snippets.js | Delete data |

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[forks-url]: https://github.com/bgiorgi1/StealThisCode_FE/network/members
[stars-shield]: https://img.shields.io/github/stars/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[stars-url]: https://github.com/bgiorgi1/StealThisCode_FE/stargazers
[issues-shield]: https://img.shields.io/github/issues/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[issues-url]: https://github.com/bgiorgi1/StealThisCode_FE/issues
[license-shield]: https://img.shields.io/github/license/bgiorgi1/StealThisCode_FE.svg?style=for-the-badge
[license-url]: https://github.com/bgiorgi1/StealThisCode_FE/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/briannagiorgi