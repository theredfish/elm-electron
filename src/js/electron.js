/**
 * See ezekeal Gist : https://gist.github.com/ezekeal/18717fda53aa1ed63fbf#file-main-js
 */
'use strict'

const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', createWindow);

// Function to create app window
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 768
	});

	// display index.html
	mainWindow.loadURL('file://${ __dirname }/index.html');

	// dev tools to have console errors
	
}


