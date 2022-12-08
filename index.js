import {} from 'dotenv/config'
import fs from 'node:fs'
import childProcess from 'node:child_process'
import ora from 'ora'

const watchedFolder = process.env.WATCHED_FOLDER
const destinationFolder = process.env.DESTINATION_FOLDER

console.log('Welcome to Folder-Watcher!\n')
console.log(`Currently destination folder: ${destinationFolder}\n`)
const spinner = ora(`Watching... ${watchedFolder}`).start()

fs.watch(watchedFolder, (eventType, filename) => {
  childProcess.exec(
    `cd ${watchedFolder} && mv * ${destinationFolder}`,
    (err) => {
      if (err) {
        throw err
      }
      console.log(`${filename} moved to ${destinationFolder}`)
    }
  )
})
