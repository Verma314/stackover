const dbUtilsQnA =  require('../dao/dbUtilsQnA')
const constants = require ('../configs/constants');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.send('Hello world !');
    });

    app.post('/ask', function (req, res) {

        //perform validations here on the req
        console.log(req.body);
        console.log( "Logged in user: " + req.session.loggedInUser);

        if ( req.session.loggedInUser == null  ) {
            res.status(400).send("User not logged in!");
            return;
        }

        req.body["username"] = req.session.loggedInUser;
        req.body["questionId"] = constants.randomIdGenerator();

        dbUtilsQnA.askQuestion(req.body, function (result,err) {
            if ( err == null ) {
                res.send("Question Submitted!");
            } else {
                res.status(500).send("Failed to ask question!");
            }

        });

    });

    app.post('/answer', function (req, res) {
        /**
         * in order to answer a question the Request body should contain one parameter: questionId 
         * 
         */
        return res.send();
    });

    app.get('/2', function (req, res) {
        res.send('Hello world !');
    });



};