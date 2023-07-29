# 0x01-ES6_promise
# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    Promises (how, why, and what)
    How to use the then, resolve, catch methods
    How to use every method of the Promise object
    Throw / Try
    The await operator
    How to use an async function
# Requirements
# General
    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using Jest and the command npm run test
    Your code will be verified against lint using ESLint
    All of your functions must be exported
# Setup
Install NodeJS 12.11.x
(in your home directory):

        curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
        sudo bash nodesource_setup.sh
        sudo apt install nodejs -y
.                                                                                     .

        $ nodejs -v
        v12.11.1
        $ npm -v
        6.11.3
# Install Jest, Babel, and ESLint
in your project directory:

        - Install Jest using: npm install --save-dev jest
        - Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
        - Install ESLint using: npm install --save-dev eslint

# Tasks
<strong>0-promise.js</strong> - Return a Promise using this prototype function getResponseFromAPI()

<strong>1-block-scoped.js</strong> - Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

<strong>2-arrow.js</strong> - Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

<strong>3-default-parameter.js</strong> - Condense the internals of the following function to 1 line - without changing the name of each function/variable.

<strong>4-rest-parameter.js</strong> - Modify the following function to return the number of arguments passed to it using the rest parameter syntax

<strong>5-spread-operator.js</strong> - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

<strong>6-string-interpolation.js</strong> - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

<strong>7-getBudgetObject.js</strong> - Notice how the keys and the variable names are the same? Modify the following function’s budget object to simply use the keyname instead.

<strong>8-getBudgetCurrentYear.js</strong> - Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object.

<strong>9-getFullBudget.js</strong> - Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object.

<strong>10-loops.js</strong> - Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

<strong>8-getBudgetCurrentYear.js</strong> - Write a function named createEmployeesObject that will receive two arguments: departmentName (String), employees (Array of Strings). The function should return an object.

<strong>12-createReportObject.js</strong> - Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject. createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments. allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax. The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

<strong>100-createIteratorObject.js</strong> - Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject. This function will return an iterator to go through every employee in every department.

<strong>101-iterateThroughObject.js</strong> - Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject. It should return every employee name in a string, separated by |