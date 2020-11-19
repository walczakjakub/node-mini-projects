const express = require('express');
const { rawListeners } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = express();
const port = 3000;

rl.question('add item: ', (answer) => {
    console.log(answer);
    });


