import { app, BrowserWindow } from "electron"
import * as serve from "electron-serve"
import * as isDev from "electron-is-dev"
import * as debug from "electron-debug"

debug({
	showDevTools: false,
})

if (isDev) {
	app.setPath("userData", `${app.getPath("userData")} (development)`)
} else {
	serve({ directory: "app" })
}

async function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
		show: false,
	})

	mainWindow.removeMenu()

	mainWindow.webContents.on("did-finish-load", () => {
		mainWindow.show()
	})

	await mainWindow.loadURL(isDev ? `http://localhost:${process.argv[2]}/` : "app://./index.html")
}

app.on("ready", createWindow)

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		void createWindow()
	}
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})
