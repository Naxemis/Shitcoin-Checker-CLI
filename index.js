#!/usr/bin/node

const readline = require('readline');
const axios = require('axios');
const clc = require('cli-color');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function checkDexScreener(tokenAddress) {
    
}

async function checkRugCheck(tokenAddress) {

}

async function checkBubblemaps(tokenAddress) {

}

function errorMessage(message) {
    console.log(clc.red('ERROR: ' + message));
}

function startPorgram() {
    rl.question('Enter token address: ', (tokenAddress) => {
        checkDexScreener(tokenAddress);
        checkRugCheck(tokenAddress);
        checkBubblemaps(tokenAddress);
        rl.close();
    })
}

startPorgram();