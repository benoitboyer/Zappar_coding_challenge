# Zappar Coding Chaellenge

Full stack coding challenge for Zappar.

## Task

Write a small Django application that loads random user data from an external API like https://randomuser.me/, saves that data into a database then renders a HTML template with a contact card component. That component should be built using TypeScript and any other library/framework that would like.

## Install

### Clone the repo:
`git clone https://github.com/benoitboyer/Zappar_coding_challenge.git`

## Backend side
### Install Python requirements:
`pip install -r requirements.txt`
### Create the database
`cd coding_challenge`
`python manage.py migrate`
### Run the server
`python manage.py runserver`
## Frontend side
The project is already bundleled. Install the following if you want to play with it.
## Install the npm dependencies
`npm install`

and recreate the build:
`npm start`

## Project Structure
The DRF API is inside the `profiles` app, the views and serializer are inside the `api` folder.

The project settings are inside `coding_challenge`

The Frontend is inside `frontend` which is also a django app.

You can find the uncompiled js source inside `frontend/src`


## How to use
On the page you will see an empty card.
You have  2 options:
- Generate a profile from the database (You will get an error if the database is empty)
- Grab a random new one from random user api: The DRF view will call random user api and the needed data will be serialized and stored in the db and send back to the frontend (api call from frontend using axios).

## Warning:
Sometimes `Import a new profile` will trigger an error.
This is because the email address from  https://randomuser.me/ is not RFC compliant (the email adress could contains special character).
The django model is using the EmailField to store that email (wich reject this invalid email).

I didn't want to store the email in a CharField with a regular regex with `*@*` because it doesn't make sense.
And display this error to the end user didn't make sense either because they have no control over it.

So try to click few times :)


## Techs stack

- Django
- Django Rest Framework
- React
- Bootsrap 4
- Typescript

## Side note
The project was really fun to make.

It gave me the possibility to learn more about typescript and discover how it can work within React.

