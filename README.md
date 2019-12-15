# TypeScript-Assignment
### version 0.0.1:
### Installation
Install redis-server and keep it up
 * If you are on Windows download redis-server from this link if you don't install yet [redis-server](https://github.com/dmajkic/redis/downloads). Then install it on your machine and ensure it redis server is up.
 * Download redis-server from this link if you don't install yet [redis-server](https://redis.io/download). Then install it on your machine and ensure it redis server is up.

Here are the steps
 * install dependency using npm ``` npm i```
 * add npm link using ``` npm link```
 * start programm using ``` npm start```

Here listed all commands
 * Start after first time use ```TypeScript-Assignment```
 * for task problem use ``` task ```
 * for fizbuzz problem use ``` fizzbuzz ```
 * for leapyear problem use ``` leapyear ```
 * for staircase problem use ``` staircase ```
 * for prime problem use ``` prime ```
 * for get all command use ``` help ```
 * for exit use ``` exit ```

### Command usage for Task
Add : ```task add [your task]```; here [your task] is string.

Check : ```task check [number]```; here number is task serial number which shown as list.

Delete : ```task del [number]```; here number is task serial number which shown as list.

Task List : ```task```; If you put only task command it show's all task list.

### Example
 ```javascript
task add "Need to solve fizzbuzz problem"
task check 1
task del 1
task
 ```  

### Command usage for problem solve
Fizzbuzz : ```fizzbuzz [number]```; here number is optional. Default value is 100.

LeapYear : ```leapyear [year]```; here year is required.

Prime Number : ```prime [number]```; here number is required. Print all prime number upto given number.

StairCase : ```staircase [number]```; here number is required. It print start in different way.

### Example
 ```javascript
fizzbuzz
fizzbuzz 100
leapyear 2020
prime 20
staircase 5
 ```  