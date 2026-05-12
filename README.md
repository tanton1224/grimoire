# Grimoire
Grimoire is a website built for DnD Players and Game Masters to create decks of spells for their characters. Grimoire provides tools for users to quickly add and remove their favorite classic 5E spells to their decks. Users are also able to create their own homebrew spellcards and add them to their decks.

## Wiki Links
* [API Routes](https://github.com/tanton1224/grimoire/wiki/API-Documentation)
* [DB Schema](https://github.com/tanton1224/grimoire/wiki/DB-Schema)
* [Feature List](https://github.com/tanton1224/grimoire/wiki/Feature-List)
* [User Stories](https://github.com/tanton1224/grimoire/wiki/User-Stories)

## Tech Stack
### Frameworks, Platforms, and Libraries:
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Database & ORM:
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

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
* Install dependencies: `npm install`
* Copy `.env.local.example` to `.env.local` and fill in the values
* Run the database migration and seed: `npx prisma migrate dev && npx prisma db seed`
* Start the dev server: `npm run dev`
* Open [http://localhost:3000](http://localhost:3000)

## Environment Variables
Copy `.env.local.example` to `.env.local` and set the following:
```
DATABASE_URL=file:./dev.db
AUTH_SECRET=<generate a strong random secret>
NEXTAUTH_URL=http://localhost:3000
```

## To-do List
* Friends function
* Profile pages
* Homebrew display
* Homebrew spellcard likes
