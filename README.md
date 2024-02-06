# Folder-Watcher

## Folder watcher and trigger

watches a folder and moves whatever enters into another folder.

clone and run:
```
touch .env
```

add these on your .env with the respective folders:
```
WATCHED_FOLDER="your watched folder"
DESTINATION_FOLDER="your destination folder"
```

if you want to leave this running, install pm2.


```
npm i -g pm2
```
then 

```
pm2 start index.js
```

This could be way more useful. 

Probably gonna make it useful in the future. 

I just wanted to move my jpgs into a wallpaper folder ;p