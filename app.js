import chalk from 'chalk';


// console.log(chalk.inverse.green('Starting app in dev mode...')); // eslint-disable-line no-console
// console.log(chalk.inverse.red('Stopping app in dev mode...'));      


// const express = require('express')
import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World et le reste')
})

app.get('/about', function (req, res) {
    res.send('A propos de moi')
  })

app.listen(3000)
console.log(chalk.inverse.green('Starting serveur on port 3000...')); // eslint-disable-line no-console