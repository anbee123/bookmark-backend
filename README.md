# bookmark-backend

## Group Member's

Name | Role
-----|------
`An Bui` |  Repo Owner
`Matthew Subin` |   Backend
`Jieun Pivarnik` |   Frontend
`Cynthia Alanis` |   Planning 


## Dependencies



```bash
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
```

## Models

```javascript
const BookmarkSchema = new mongoose.Schema({
  title: String,
  url: String
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);
```

## Backend Route Table 
### Index
http://localhost:3000/bookmarks

### Create
http://localhost:3000/bookmarks

### Delete
http://localhost:3000/bookmarks/:id

### Update
http://localhost:3000/bookmarks/:id

## Trello Workspace

[Trello](https://trello.com/b/18RNqCfj/bookmarks)