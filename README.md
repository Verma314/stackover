# Building a sample  Q&A website such as StackOverflow or Reddit

## to do

* [X] login, registeration 
* [X] mongodb connection
* [ ] refine login, registeration
* [ ] adding JWT tokens for login
* [X] adding session for _logged in_ user
* [X] creating endpoint for asking a question
* [ ] GET endpoint for enumerating all questions
* [X] POST endpoint for answering a question.
* [ ] Endpoint to upvote a question or an answer
* [ ] Endpoint to get stats of a user
* [ ] Deploying this to cloud

* [ ] GET endpoint for enumerating answers to a question 
* [ ] adding HTTP error codes for faliure etc
* [ ] refactoring to make code base structure cleaner



## Objects

### 1. User
- username
- password

### 2. Post 
- ```question```
- List of ```Answer```s
- ```User```

### 3. Question
- ```QuestionId``` 
- ```Statement```
- List of ```Answer``` strings 
- ```Upvotes```
- ```User```

### 4. Answer
- ```Statement```
- ```Upvotes```
- ```User```

--


# Public Endpoints 

### 1. POST http://localhost:8080/register

to register a new user

Header:
Content-Type: application/x-www-form-urlencoded

Body:

username - <username>
password - <password>


### 2. POST http://localhost:8080/login

Header:

```Content-Type: application/x-www-form-urlencoded```

Body:

username - <username>
password - <password>


### 3. GET http://localhost:8080/logout

to log the user out.



### 4. GET http://localhost:8080/session

to check who is logged in 



## Q an A related endpoints

### 1. POST http://localhost:8080/answer

fields: 
- questionId : <needed > example: b6a2b8566ea41e617f2ec541922b3f1d
- answer : <answer to the question >


### 2. POST http://localhost:8080/ask

fields:
- statement : < the question statment>

(the user id is picked up from the session)

