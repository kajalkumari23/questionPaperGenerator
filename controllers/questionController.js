const questionStore = require('../utils/questionStore');

class QuestionController {
  static getQuestionsByDifficulty(difficulty) {
    const allQuestions = questionStore.getAllQuestions();
    return allQuestions.filter(q => q.difficulty === difficulty);
  }

  static generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];

    for (const difficulty in difficultyDistribution) {
      const count = Math.round(totalMarks * difficultyDistribution[difficulty] / 100);
      const filteredQuestions = this.getQuestionsByDifficulty(difficulty);
      questionPaper.push(...filteredQuestions.slice(0, count));
    }

    return questionPaper;
  }
}

module.exports = QuestionController;
