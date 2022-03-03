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

ex: `http://localhost:3000/v1/`

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
| DELETE | /students/:studentIdx | Delete a student                       |

## API Docs with Swagger

```
nodemon dev app.js
```

```
http://localhost:3000/api-docs
```

## Lecture

**Read a list of opened lectures:** `GET /lectures`

Pagination:

- ex (Initial request): `GET /lectures?limit=10`
- ex (Next page request): `GET/lectures?limit=10&starting_after=1`

Response:

```json
{
  "url": "/v1/lectures",
  "has_more": true, // Whether or not there are more elements available after this set.
  "lectures": [
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

Response:

```json
{
  "lectureTitle": "Web 기초 1",
  "lectureDesc": "Web을 처음 접하는 수강생을 위한 강의!\n쉽고 재밌고 Web에 대해 알아보자!",
  "categoryIdx": 1,
  "lecturePrice": 50000,
  "isShowYN": "N",
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

**Create new lecture:** `POST /lectures`

Request body (Required) (`application/json`):

```json
{
  "categoryIdx" : 1,
  "teacherIdx": 1,
  "lectureTitle" : "Web 고급 1",
  "lectureDesc" : "코딩의 ㅋ자도 모르는 왕초보를 위한 입문 수업입니다.
  웹의 기본부터 AWS 배포까지, 서비스 런칭을 위한 필수 기술을 모두 담았습니다.
  튜터와의 즉문즉답 개발자 튜터의 꼼꼼한 코드리뷰로 걸림돌은 모조리 제거해 드릴게요.
  매주 토/일 즉문즉답 시간, 3분 이내에 답변해드려요.
  주 1회 온라인 스터디를 진행합니다.
  평일 저녁/주말 낮마다 온라인 스터디가 진행됩니다. 매주 코딩하는 습관을 길러드려요",
  "lecturePrice" : 100000
}
```

Response:

```json
{
  "lectureIdx": 3
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

## Student

**Read a list of students:** `GET /students`

Pagination:

- ex (Initial request): `GET /students?limit=10`
- ex (Next page request): `GET/students?limit=10&starting_after=1`

Response:

```json
{
  "url": "/v1/students",
  "has_more": true, // Whether or not there are more elements available after this set.
  "students": [
    {
      "studentIdx": 1,
      "studentEmail": "mimi@lecture.com",
      "studentName": "김미미",
      "studentUserName": "열심맨",
      "registDate": "2021-12-26T10:06:17.000Z",
      "modifyDate": "2021-12-29T10:06:17.000Z"
    },
    {
      "studentIdx": 2,
      "studentEmail": "cha@lecture.com",
      "studentName": "강차차",
      "studentUserName": "차도녀",
      "registDate": "2021-12-26T10:06:17.000Z",
      "modifyDate": null
    }
  ]
}
```

**Read a specific student:** `GET /students/:studentIdx

Response:

```json
{
  "studentIdx": 1,
  "studentEmail": "mimi@lecture.com",
  "studentName": "김미미",
  "studentUserName": "열심맨",
  "registDate": "2021-12-26T10:06:17.000Z",
  "modifyDate": "2021-12-29T10:06:17.000Z"
}
```

**Create new student:** `POST /students`

Request body (Required) (`application/json`):

```json
{
  "studentEmail": "lalisa@lecture.com",
  "studentName": "라리사",
  "studentUserName": "블핑라리사아님"
}
```

Response:

```json
{
  "studentIdx": 3
}
```

**Delete a student:** `DELETE /students/:studentIdx

## Payment

**Pay a lecture:** `POST /payments`

Request body (Required) (`application/json`):

```json
{
  "studentIdx": 1,
  "lectures": [
    {
      "lectureIdx": 1,
      "lectureIdx": 2
    }
  ]
}
```

Response

```json
{
  "studentIdx": 1,
  "paymentIdx": "202203022229011" //yyyyMMddHHmmss + sequence
}
```

## ERD

![image](https://user-images.githubusercontent.com/45909171/147907734-b527f2e4-5f26-4304-8585-5ee27769f87a.png)

```

```
