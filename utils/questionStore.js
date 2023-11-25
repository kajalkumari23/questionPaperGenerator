const Question = require('../models/questionmodel');

const questions = [
  new Question("What is the speed of light", "Physics", "Waves", "Easy", 5),
  new Question("Another question", "Chemistry", "Reactions", "Medium", 8),
  new Question("Another question", "Chemistry", "Reactions", "Hard", 100),
  new Question("Another question", "Chemistry", "Reactions", "Medium", 100),
];

module.exports = {
  addQuestion: (question, subject, topic, difficulty, marks) => {
    const newQuestion = new Question(question, subject, topic, difficulty, marks);
    questions.push(newQuestion);
  },

  getAllQuestions: () => questions,
};
