Question Paper Generator
Overview
This Node.js project is a simple question paper generator that randomly selects questions from a JSON file. The questions are categorized into three difficulty levels: easy, medium, and hard. The generator aims to create question papers with a distribution of 20% easy questions, 50% medium questions, and 30% hard questions.

Setup
Follow these steps to set up and run the project on your local machine:

Prerequisites
Node.js installed on your machine.
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/question-paper-generator.git
Navigate to the project directory:

bash
Copy code
cd question-paper-generator
Install dependencies:

bash
Copy code
npm install
Usage
Run the Node.js server:

bash
Copy code
node app.js
Open your web browser and go to http://localhost:5000/ to view the question paper generator in action.

How It Works
The generator reads questions from a questions.json file, categorizes them by difficulty, and then randomly selects questions based on the specified distribution. The generated question paper is displayed on the web page.

Project Structure
app.js: Node.js server script.
questions.json: JSON file containing the questions.
Customization
Feel free to customize the project by adding more questions to the questions.json file or adjusting the distribution percentages in the generateQuestionPaper function in app.js.
