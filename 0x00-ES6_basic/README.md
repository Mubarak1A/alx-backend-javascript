# 0x00. ES6 Basics
# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    What ES6 is
    New features introduced in ES6
    The difference between a constant and a variable
    Block-scoped variables
    Arrow functions and function parameters default to them
    Rest and spread function parameters
    String templating in ES6
    Object creation and their properties in ES6
    Iterators and for-of loops
# Requirements
# General
    All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    Allowed editors: vi, vim, emacs, Visual Studio Code
    All your files should end with a new line
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the js extension
    Your code will be tested using the Jest Testing Framework
    Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
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
in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install

# Tasks
<strong>0-constants.js</strong> - Modify: function taskFirst to instantiate variables using const and function taskNext to instantiate variables using let

<strong>1-block-scoped.js</strong> - Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

<strong>2-arrow.js</strong> - Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

<strong>3-default-parameter.js</strong> - Condense the internals of the following function to 1 line - without changing the name of each function/variable.

<strong>4-rest-parameter.js</strong> - Modify the following function to return the number of arguments passed to it using the rest parameter syntax

<strong>5-spread-operator.js</strong> - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

<strong>6-string-interpolation.js</strong> - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

<strong>7-getBudgetObject.js</strong> - Notice how the keys and the variable names are the same? Modify the following function’s budget object to simply use the keyname instead.

<strong>8-getBudgetCurrentYear.js</strong> - Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object.

<strong>9-getFullBudget.js</strong> - Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object.


