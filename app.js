const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const questionsFilePath = path.join(__dirname, 'questions.json');

app.get('/', (req, res) => {
  fs.readFile(questionsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading questions file:', err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      const questions = JSON.parse(data);

      const questionPaper = generateQuestionPaper(questions);
      res.json(questionPaper);
    } catch (parseError) {
      console.error('Error parsing questions JSON:', parseError);
      res.status(500).send('Internal Server Error');
    }
  });
});

function generateQuestionPaper(questions) {
  const questionPaper = [];
  
  for (let i = 0; i < 4; i++) {
    const easyQuestion = getRandomQuestionByDifficulty(questions, 'Easy');
    questionPaper.push(easyQuestion);
  }

  for (let i = 0; i < 5; i++) {
    const mediumQuestion = getRandomQuestionByDifficulty(questions, 'Medium');
    questionPaper.push(mediumQuestion);
  }

  for (let i = 0; i < 2; i++) {
    const hardQuestion = getRandomQuestionByDifficulty(questions, 'Hard');
    questionPaper.push(hardQuestion);
  }

  return questionPaper;
}

function getRandomQuestionByDifficulty(questions, difficulty) {
  const filteredQuestions = questions.filter(question => question.difficulty === difficulty);
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
