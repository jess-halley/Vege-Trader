
# Boilerplate: Knex.js

Boilerplate contains the following:

 - Express
 - Knex
 - SQLite3
 - Express Handlebars
 - body-parser
 - AVA
 - Node Inspector
 - nodemon


## Install
Things to be installed:

```
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

# Vege-Trader
Swap your home grown produce with your neighbours.

MVP:

1) create a profile page where users can add the produce they are willing to trade.
2) create a main page that displays all the veges availble for trading in the neighbourhood.
3) create a message feature where users can make a trade request to all of the growers of a particular produce.

User story:

"As a user I want to be able to create a profile that lists produce I'm willing to trade."
"I then want to be able to go to a different page and see a list of all of the produce my neigbours are willing to trade"
"I want to be able to click on some produce and send a message to the traders."

Dev plan:

Focus on one user story at a time.

1) Start with HTML

2) Establish routes, and write some tests for these.

3) Work on database code and write tests for these. 
