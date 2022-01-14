import './App.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
	const quizData = [
		{
			questionText: 'Which of the following command is used to install create-react-app?',
			answerOptions: [
				{ options: 'npm install -f create-react-app', isCorrect: false },
				{ options: 'npm install -b create-react-app', isCorrect: false },
				{ options: 'npm install -g create-react-app', isCorrect: true },
				{ options: 'npm install -c create-react-app', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following acts as the input of a class-based component?',
			answerOptions: [
				{ options: 'Class', isCorrect: false },
				{ options: 'Props', isCorrect: true },
				{ options: 'Render', isCorrect: false },
				{ options: 'Factory', isCorrect: false },
			],
		},
		{
			questionText: 'How many numbers of elements a valid react component can return?',
			answerOptions: [
				{ options: '1', isCorrect: true },
				{ options: '2', isCorrect: false },
				{ options: '3', isCorrect: false },
				{ options: 'Many', isCorrect: false },
			],
		},
		{
			questionText: 'How many ways of defining your variables in ES6?',
			answerOptions: [
				{ options: '1', isCorrect: false },
				{ options: '2', isCorrect: false },
				{ options: '4', isCorrect: false },
				{ options: '3', isCorrect: true },
			],
		},
    {
			questionText: 'What are the two ways to handle data in React?',
			answerOptions: [
				{ options: 'State & Props', isCorrect: true },
				{ options: 'Services & Components', isCorrect: false },
				{ options: 'State & Services', isCorrect: false },
				{ options: 'State & Component', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

	const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const handleNextQueClick = () =>{
    if (currentQuestion < quizData.length-1)
    {
      setCurrentQuestion(currentQuestion + 1)  
    }
    else {
      alert('This is last question');
    }
  };

  const handlePrevQueClick = () =>{
    if (currentQuestion === 0)
    {
      alert('This is first question');
    }
    else {
      setCurrentQuestion(currentQuestion -1)
    }
  };

  const handleSubmitClick = () =>{
    setShowScore(true);
    };
  
  
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<h3>You scored {score} out of {quizData.length}</h3>
          {/* <ul>
            {quizData.map((item, index) => (
              <li>
                key={index}>
                {item.answerOptions.isCorrect}
              </li>
            ))}
          </ul> */}
				</div>
			) : (
				<>
          <div>
						<div><h2><span>Question {currentQuestion + 1}</span>/{quizData.length}</h2></div>
						<div><h3>{quizData[currentQuestion].questionText}</h3></div>
						<div><h4>The available options are:</h4></div>

            <div>
            {quizData[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.options}</button>
            ))}</div>
            <hr></hr>
            <hr></hr>
            <div className='click'>                    
            <button onClick={handlePrevQueClick}>Previous Question</button><br/>
						<button onClick={handleNextQueClick}>Next Question</button><br/>
            <button onClick={handleSubmitClick}>Submit</button>
            </div>
					</div>
				</>        
			)}
		</div>
	);
}