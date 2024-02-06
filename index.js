import {} from 'dotenv/config'
import fs from 'node:fs'
import childProcess from 'node:child_process'
import ora from 'ora'

const watchedFolder = process.env.WATCHED_FOLDER
const destinationFolder = process.env.DESTINATION_FOLDER

console.log('Welcome to Folder-Watcher!\n')
console.log(`Currently destination folder: ${destinationFolder}\n`)
ora(`Watching... ${watchedFolder}\n`).start()

fs.watch(watchedFolder, (eventType, filename) => {
  childProcess.exec(`cd ${watchedFolder} && mv ${filename} ${destinationFolder}`, () =>
    console.log(`\n${filename} moved to ${destinationFolder}`)
  )
})
