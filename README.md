# Lecture

Lecture is a rest api written in Node.js

## How To Run

Download Node.js [here](https://nodejs.org/en/download/)

```
node app.js
```
## API List

### Lecture API

| Method | Path                                   | Description                       |
| ------ | -------------------------------------- | --------------------------------- |
| GET    | /lecture/list?page=1&pageSize=10       | Read a list of lectures           |
| GET    | /lecture/:lectureIdx                   | Read a detail of specific lecture |
| POST   | /lecture/new                           | Create new lecture                |
| PUT    | /lecture/:lectureIdx                   | Update a lecture                  |
| PATCH  | /lecture/updateShow/:lectureIdx.       | Show/Close a lecture              |
| DELETE | /lecture/:lectureIdx                   | Delete a lecture                  |

### Student API

| Method | Path                                   | Description                       |
| ------ | -------------------------------------- | --------------------------------- |
| POST   | /student/new                           | Create new Student                |
| DELETE | /student/:studentIdx                   | Delete a student                  |


## ERD
![image](https://user-images.githubusercontent.com/45909171/147907734-b527f2e4-5f26-4304-8585-5ee27769f87a.png)
