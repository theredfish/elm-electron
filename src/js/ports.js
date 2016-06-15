'use strict'

// require is necessary for the moment to
// avoid bug with electron...
const Elm = require('./js/elm.js');

let container = document.getElementById('container');
let elmElectron = Elm.Main.embed(container);
