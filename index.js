const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const outputDir = path.resolve(__dirname,"output");
const outputPath=path.join(outputDir,"Team.html");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
