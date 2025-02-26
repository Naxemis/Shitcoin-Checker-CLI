#!/usr/bin/node

const readline = require('readline');
const axios = require('axios');
const clc = require('cli-color');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function checkDexScreener(tokenAddress) {
    try {
        // response from a request, that was send to DEX Screener API, about token adress given by user
        const response = await axios.get(`https://api.dexscreener.com/token-pairs/v1/solana/${tokenAddress}`);

        if (response.data[0]) {
            // info about token that will be displayed
            const tokenName = response.data[0].baseToken.name; // f.e NodeCoin
            const tokenSymbol = response.data[0].baseToken.symbol; // f.e NODE
            const tokenAddress = response.data[0].baseToken.address; // same token address that user entered
            const chainId = response.data[0].chainId; // f.e. solana
            const dexId = response.data[0].dexId; // f.e. raydium
            const pairAddress = response.data[0].pairAddress // same values that are in token's url; https://dexscreener.com/solana/pairAddress 
            const url = response.data[0].url; // link to DEX Screener website of this token 

            // displaying all info
            console.log(clc.blue("DEX Screener:")); // tittle
            console.log("Token Name: " + clc.yellow(tokenName));
            console.log("Token Symbol: " + clc.yellow(tokenSymbol));
            console.log("Token Address: " + clc.yellow(tokenAddress));
            console.log("Chain: " + clc.yellow(chainId));
            console.log("Dex: " + clc.yellow(dexId));
            console.log("Pair Address: " + clc.yellow(pairAddress));
            console.log("URL: " + clc.magenta.underline(url));
        }
        else {
            errorMessage("DEX Screener - No data found about this token.")
        }
    } 
    catch (error) {
        errorMessage("DEX Screener - Encountered some problem while processing the token.")
    }
}

function errorMessage(message) {
    console.log(clc.red('ERROR: ' + message));
}

function startPorgram() {
    rl.question('Enter token address: ', (tokenAddress) => {
        checkDexScreener(tokenAddress);
        rl.close();
    })
}

startPorgram();