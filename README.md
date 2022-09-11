# Grimoire
Grimoire is a website built for DnD Players and Game Masters to create decks of spells for their characters. Grimoire provides tools for users to quickly add and remove their favorite classic 5E spells to their decks. Users are also able to create their own homebrew spellcards and add them to their decks.

## Wiki Links
* [API Routes](https://github.com/tanton1224/grimoire/wiki/API-Documentation)
* [DB Schema](https://github.com/tanton1224/grimoire/wiki/DB-Schema)
* [Feature List](https://github.com/tanton1224/grimoire/wiki/Feature-List)
* [User Stories](https://github.com/tanton1224/grimoire/wiki/User-Stories)

## Tech Stack
### Frameworks, Platforms, and Libraries:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Database:
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Hosting:
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Home Page
![image](https://user-images.githubusercontent.com/101833447/189538086-65bb4000-9a53-4605-a2ac-fcd2a5a9a4b1.png)

## Encyclopedia
![image](https://user-images.githubusercontent.com/101833447/189538110-99b6b37e-7b94-41ae-97b2-1a317bbcf044.png)

## User Decks Display
![image](https://user-images.githubusercontent.com/101833447/189538145-4a3d739d-10a6-423e-8143-54951e030f3d.png)

## User Spellcards Display
![image](https://user-images.githubusercontent.com/101833447/189538171-28c67f94-cd31-4a18-a295-f588ed6538cf.png)

## Create Spellcard Modal
![image](https://user-images.githubusercontent.com/101833447/189538232-a535df39-c422-4778-a192-fa471e0d73f0.png)
![image](https://user-images.githubusercontent.com/101833447/189538288-56bf182a-830d-4bd9-8229-87206bd6e2a8.png)

## Create Deck Modal
![image](https://user-images.githubusercontent.com/101833447/189538309-fc031d44-3d36-44fa-ba0a-79b9d5f7d537.png)

## Run Locally
* Clone the repo
* Open up two terminals, one for backend and frontend
* In the first terminal, at the root, run ```pipenv install``` to install dependencies in the pipenv environment, then run ```pipenv run flask run```.
* In the second terminal, cd into the ```react-app``` directory. Run ```npm install``` to install dependencies, then run ```npm start``` to open the front end.

## Environment Variables
To run this project, you need to add the following environment variables to your root directory in a .env file:
```
DATABASE_URL=<<insert_database_url>>
SECRET_KEY=<<generate_strong_secret_key>>
```

## To-do List
* Friends function
* Profile pages
* Homebrew display
* Homebrew spellcard likes
