#!/usr/bin/env node

console.log("Webigniter 2.0");

const inquirer = require('inquirer');
const questions = require('../src/questions');

/*
 * Start asking questions in order to configure the new web project
 */
inquirer.prompt(questions)
  .then(answers => {
    console.log(answers.projectName);
  });
