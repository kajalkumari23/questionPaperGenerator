const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const QuestionController = require('./controllers/questionController');
const questionStore = require('./utils/questionStore');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/generate-question-paper', (req, res) => {
  const difficulty = req.body.difficulty;
  const totalMarks = parseInt(req.body.totalMarks);

  // const questions = QuestionController.getQuestionsByDifficulty(difficulty);
  const questionPaper = QuestionController.generateQuestionPaper(totalMarks, { [difficulty]: 100 });

  res.send({questionPaper });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
