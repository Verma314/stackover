# Building some simple endpoints for  Q&A website such as StackOverflow or Reddit

to do

* [ ] login, registeration 
* [ ] mongodb connection
* [ ] adding JWT tokens for login
* [ ] adding session for _logged in_ user
* [ ] creating endpoint for asking a question
* [ ] GET endpoint for enumerating all questions
* [ ] POST endpoint for answering a question
* [ ] GET endpoint for enumerating answers to a question 
* [ ] Endpoint to upvote a question or an answer
* [ ] Endpoint to get stats of a user
* [ ] Deploying this to cloud


-- 

## Objects

### 1. User

### 2. Post 
- ```question```
- List of ```answer``s
- ```User```

### 3. Question
- ```Statement```
- List of ```Answer```s
- ```Upvotes```
- ```User```

### 4. Answer
- ```Statement```
- ```Upvotes```
- ```User```