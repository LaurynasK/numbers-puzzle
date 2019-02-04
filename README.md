# numbers-puzzle

###Installation
all code created on top of node.js <code>v11.8.0</code>
so to install you just need to run npm command

    npm install

to run tests use command:

    npm test
    
to run application itself use command:
    
    npm start
    
for local environment was used <code>Ubuntu 18.04.1 LTS</code>

####lib-puzzle dir
All puzzle logic is in lib-puzzle directory files, 
main lib file is <b>puzzle,.js</b> this file is responsible 
also for showing puzzle in cli and accepting user input, 
others files is responsible for puzzle logic, like creating puzzle, 
checking puzzle for completion, moving puzzle value and also one file 
for small helpers.

####specs dir
All puzzle tests was done with testing framework <b>jasmine</b>. 
According [nyc library](https://www.npmjs.com/package/nyc) output 
all 86% of branch code is covered with tests. 
  

####sever.js file
<b>server.js</b> is main application file, there is also another small dependency for 
more eye pleasing table display that could be easily changed for 
something else.

####possible upgrades
Puzzle logic files created that we can change size just by 
changing sizeValue in server.js file, we can also create endpoints 
for puzzle creation, for puzzle number to move and for checking, 
that we can create front-end in a future.    
