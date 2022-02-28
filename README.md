# Lecture

Lecture is a REST API written in Node.js.
This API has predictable resouce-oriented URLs, accepts form-encoded request bodies, return JSON-encoded responses, and uses standard HTTP response, and verbs.

## How To Run

Download Node.js [here](https://nodejs.org/en/download/)

```
node app.js
```

## Endpoint

http://localhost:3000/api/

## Pagination

- `limit` (optional): default is 10, minimum is 1, maximum 100
- `starting_after` (optional): pagination cursor for next page
- `ending_before` (optional): pagination cursor for previous page

## Versioning

`v1/`

ex: `http://localhost:3000/api/v1/`

## Error

- `200 - OK` | Everything worked as expected.
- `400 - Bad Request` | The request was unacceptable, often due to missing a required parameter.
- `401 - Unauthorized` | No valid API key provided.
- `402 - Request Failed` | The parameters were valid but the request failed.
- `403 - Forbidden` | The API key doesn't have permissions to perform the request.
- `404 - Not Found` | The requested resource doesn't exist.
- `429 - Too Many Requests` | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
- `500 - Server Errors` | Something went wrong on Serin's end.

**Result (Except `200 - OK`):**

- code: int
- message: String

## API List

### Lecture API

| Method | Path                  | Description                       |
| ------ | --------------------- | --------------------------------- |
| GET    | /lectures             | Read a list of lectures           |
| GET    | /lectures/:lectureIdx | Read a detail of specific lecture |
| POST   | /lectures             | Create new lecture                |
| PUT    | /lectures/:lectureIdx | Update a specific lecture         |
| PATCH  | /lectures/:lectureIdx | Update a specific lecture         |
| DELETE | /lectures/:lectureIdx | Delete a lecture                  |

### Student API

| Method | Path                  | Description                            |
| ------ | --------------------- | -------------------------------------- |
| GET    | /students             | Read a list of students                |
| GET    | /students/:studentIdx | Read a detail of specific student info |
| POST   | /students             | Create new student                     |
| PUT    | /students/:studentIdx | Update a specific student              |
| PATCH  | /students/:studentIdx | Update a specific student              |
| DELETE | /students/:studentIdx | Delete a student                       |

## API Docs

```
nodemon dev app.js
```

```
localhost:3000/api-docs
```

## ERD

![image](https://user-images.githubusercontent.com/45909171/147907734-b527f2e4-5f26-4304-8585-5ee27769f87a.png)
