import React, { useMemo, useState, useEffect } from "react";
import { questions as allQuestions } from "./data/questions";

const TOTAL_QUESTIONS_PER_QUIZ = 10;

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRemark(percentage) {
  if (percentage === 100) return "Perfect! You’re a Cybersecurity Master 🛡️";
  if (percentage >= 80) return "Great job! Very strong security awareness.";
  if (percentage >= 50) return "Good attempt! You know the basics.";
  return "Needs improvement. Keep learning and stay safe online.";
}

function App() {
  const [quizId, setQuizId] = useState(0); // changes to reshuffle questions
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  // Prepare quiz questions: random subset + shuffled options
  const quizQuestions = useMemo(() => {
    const shuffledQuestions = shuffleArray(allQuestions);
    const selected = shuffledQuestions.slice(
      0,
      Math.min(TOTAL_QUESTIONS_PER_QUIZ, shuffledQuestions.length)
    );

    return selected.map((q) => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  }, [quizId]);

  useEffect(() => {
    // Reset all state whenever we start a new quiz
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setWasCorrect(false);
    setAnswers([]);
    setShowResults(false);
    setError("");
  }, [quizId]);

  if (quizQuestions.length === 0) {
    return (
      <div className="app">
        <h1>Cybersecurity Quiz Master</h1>
        <p>No questions available.</p>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const progressPercent = ((currentIndex + (showResults ? 1 : 0)) / totalQuestions) * 100;

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setError("");
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) {
      setError("Please select an option before submitting.");
      return;
    }
    if (isAnswered) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setWasCorrect(isCorrect);
    setIsAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        questionText: currentQuestion.text,
        selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (!isAnswered) return;

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setWasCorrect(false);
      setError("");
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setQuizId((prev) => prev + 1); // triggers new random quiz
  };

  const percentage = (score / totalQuestions) * 100;

  if (showResults) {
    return (
      <div className="app">
        <header className="app-header">
          <div>
            <h1>Cybersecurity Quiz Master</h1>
            <p className="subtitle">Test your security awareness 🔐</p>
          </div>
          <button className="primary-button" onClick={handleRestart}>
            Try Another Random Quiz
          </button>
        </header>

        <div className="results-card">
          <h2>Your Results</h2>
          <p className="results-score">
            Score: <strong>{score}</strong> / {totalQuestions} ({percentage.toFixed(0)}%)
          </p>
          <p className="results-remark">{getRemark(percentage)}</p>

          <div className="results-summary">
            <p>
              Correct answers: <span className="tag tag-correct">{score}</span>
            </p>
            <p>
              Incorrect answers:{" "}
              <span className="tag tag-wrong">{totalQuestions - score}</span>
            </p>
          </div>

          <h3>Question Review</h3>
          <ul className="review-list">
            {answers.map((ans, index) => (
              <li
                key={ans.questionId}
                className={`review-item ${ans.isCorrect ? "correct" : "wrong"}`}
              >
                <div className="review-header">
                  <span className="review-number">Q{index + 1}.</span>
                  <span className="review-text">{ans.questionText}</span>
                </div>
                <div className="review-details">
                  <p>
                    Your answer:{" "}
                    <span className={ans.isCorrect ? "correct-text" : "wrong-text"}>
                      {ans.selectedOption}
                    </span>
                  </p>
                  {!ans.isCorrect && (
                    <p>
                      Correct answer:{" "}
                      <span className="correct-text">{ans.correctAnswer}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button className="secondary-button" onClick={handleRestart}>
            Play Again with New Questions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Cybersecurity Quiz Master</h1>
          <p className="subtitle">Learn to stay safe online, question by question.</p>
        </div>
        <button className="secondary-button" onClick={handleRestart}>
          Shuffle Quiz
        </button>
      </header>

      <div className="quiz-card">
        <div className="quiz-meta">
          <span className="pill">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="pill pill-outline">Score: {score}</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="question-section">
          <p className="question-category">
            {currentQuestion.category} • {currentQuestion.difficulty.toUpperCase()}
          </p>
          <h2 className="question-text">{currentQuestion.text}</h2>
        </div>

        <div className="options-grid">
          {currentQuestion.options.map((option) => {
            let className = "option-button";

            if (isAnswered) {
              if (option === currentQuestion.correctAnswer) {
                className += " correct";
              } else if (option === selectedOption) {
                className += " wrong";
              } else {
                className += " disabled";
              }
            } else if (option === selectedOption) {
              className += " selected";
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {error && <p className="error-text">{error}</p>}

        {isAnswered && (
          <div className="explanation-box">
            <p className={wasCorrect ? "correct-text" : "wrong-text"}>
              {wasCorrect ? "✅ Correct!" : "❌ Incorrect."}
            </p>
            <p className="explanation-text">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="actions-row">
          {!isAnswered ? (
            <button className="primary-button" onClick={handleSubmitAnswer}>
              Submit Answer
            </button>
          ) : (
            <button className="primary-button" onClick={handleNextQuestion}>
              {currentIndex + 1 < totalQuestions ? "Next Question" : "View Results"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
