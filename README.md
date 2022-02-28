# Lecture API

Lecture API is a REST API written in Node.js.
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

| Method | Path                    | Description                       |
| ------ | ----------------------- | --------------------------------- |
| GET    | /lectures               | Read a list of lectures           |
| GET    | /lectures?s=:searchWord | Read a list of search result      |
| GET    | /lectures/:lectureIdx   | Read a detail of specific lecture |
| POST   | /lectures               | Create new lecture                |
| PUT    | /lectures/:lectureIdx   | Update a specific lecture         |
| PATCH  | /lectures/:lectureIdx   | Update a specific lecture         |
| DELETE | /lectures/:lectureIdx   | Delete a lecture                  |

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

## Lecture

**Read a list of lectures:** `GET /lectures`

Pagination:

- ex (Initial request): `GET /lectures?limit=10`
- ex (Next page request): `GET/lecture?limit=10&starting_after=1`

Response:

```json
{
  "url": "/v1/lectures",
  "has_more": true,
  "data": [
    {
      "lectureIdx": 1,
      "categoryIdx": 1,
      "lectureTitle": "Web 기초 1",
      "teacherIdx": 1,
      "lecturePrice": 50000,
      "isShowYN": "Y",
      "studentCount": 2,
      "registDate": "2021-12-26T10:06:17.000Z"
    },
    {
      "lectureIdx": 1,
      "categoryIdx": 1,
      "lectureTitle": "Web 기초 2",
      "teacherIdx": 1,
      "lecturePrice": 55000,
      "isShowYN": "Y",
      "studentCount": 11,
      "registDate": "2021-12-26T10:06:17.000Z"
    }
  ]
}
```

**Read a detail of lecture:** `GET /lectures/:lectureIdx`

Pagination:

- ex (Initial request): `GET /lectures?limit=10`
- ex (Next page request): `GET/lecture?limit=10&starting_after=1`

Response:

```json
{
  "lectureTitle": "Web 기초 1",
  "lectureDesc": "Web을 처음 접하는 수강생을 위한 강의!\n쉽고 재밌고 Web에 대해 알아보자!",
  "categoryIdx": 1,
  "lecturePrice": 50000,
  "isShowYN": "Y",
  "studentCount": 2,
  "registDate": "2021-12-26T10:06:17.000Z",
  "modifyDate": null,
  "students": [
    {
      "studentIdx": 1,
      "studentUserName": "열심맨",
      "lectureStartDate": "2021-12-26T10:06:17.000Z"
    },
    {
      "studentIdx": 2,
      "studentUserName": "차도녀",
      "lectureStartDate": "2021-12-26T10:06:17.000Z"
    }
  ]
}
```

**Update specific lecture:** `PUT /lectures/:lectureIdx`

Parameters (`application/json`):

- lectureTitle: String (optional)
- lectureDesc: String (optional)
- lecturePrice: int (optional)

Response:

```json
{
  "lectureIdx": 2,
  "lectureTitle": "Web 기초 1",
  "lectureDesc": "Web을 처음 접하는 수강생을 위한 강의!\n쉽고 재밌고 Web에 대해 알아보자!",
  "categoryIdx": 1,
  "lecturePrice": 50000,
  "isShowYN": "Y",
  "registDate": "2021-12-26T10:06:17.000Z",
  "modifyDate": "2021-12-26T10:06:17.000Z"
}
```

**Update visibility of specific lecture:** `PATCH /lectures/:lectureIdx`

Parameters (`application/json`):

- isShowYN: String(required)

Response:

```json
{
  "lectureIdx": 2,
  "lectureTitle": "Web 기초 1",
  "lectureDesc": "Web을 처음 접하는 수강생을 위한 강의!\n쉽고 재밌고 Web에 대해 알아보자!",
  "categoryIdx": 1,
  "lecturePrice": 50000,
  "isShowYN": "Y",
  "registDate": "2021-12-26T10:06:17.000Z",
  "modifyDate": "2021-12-26T10:06:17.000Z"
}
```

**Delete specific lecture:** `DELETE /lectures/:lectureIdx`

## ERD

![image](https://user-images.githubusercontent.com/45909171/147907734-b527f2e4-5f26-4304-8585-5ee27769f87a.png)

```

```
