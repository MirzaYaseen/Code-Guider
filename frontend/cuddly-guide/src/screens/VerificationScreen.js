import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../assets/images/background.jpg'
const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    background:  "linear-gradient(to left,  #87CEEB, #87CEEB, #F5F5F5)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
  },
  container: {
    // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    // padding: '10px',

    borderRadius: '10px',
    // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontSize: '24px',
    marginBottom: '20px',
  textAlign:'center',
  color:'red'
  },
  listItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  timer: {
    fontSize: '16px',
    color: '#888',
    marginTop: '10px',
    justifyContent:'center',
    alignSelf:'center',
    display:'flex'
  },
  completedPaper: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  completedTitle: {
    fontSize: '28px',
    marginBottom: '20px',
  },
  continueButton: {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
}));

const QuizScreen = () => {
  const classes = useStyles();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timer, setTimer] = useState(120); 
  const [quizPassed, setQuizPassed] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which of the following is a JavaScript framework?',
      options: ['React', 'Python', 'Java'],
      correctAnswer: 'React',
    },
    {
      question: 'What language is used for styling web pages?',
      options: ['HTML', 'JavaScript', 'CSS'],
      correctAnswer: 'CSS',
    },
    {
      question: 'Which data type is not supported in JavaScript?',
      options: ['String', 'Number', 'Boolean', 'Float'],
      correctAnswer: 'Float',
    },
    {
      question: 'What is Event loop use?',
      options: ['List', 'Queue', 'Stack', 'Array'],
      correctAnswer: 'Queue',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0 || currentQuestion === questions.length) {
        checkAnswers();
        clearInterval(interval);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, currentQuestion]);

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswers = () => {
    const correctAnswers = questions.map((question) => question.correctAnswer);
    const correctCount = correctAnswers.reduce((count, correctAnswer, index) => {
      if (correctAnswer === selectedAnswers[index]) {
        return count + 1;
      }
      return count;
    }, 0);

    if (correctCount >= 4) {
      // Navigate to the next screen (e.g., SuccessScreen)
      setQuizPassed(true);
      navigate('/mentotSubjectReg');
    } else {
      // Redirect to the login page
  
      navigate('/chooseSubject');
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className={classes.backgroundContainer}>
    <Container maxWidth="sm" className={classes.container}>
    {currentQuestion < questions.length ? (
      <Paper elevation={3} style={{ padding: '100px', marginBottom: '10px',  }}>
    <Typography fontSize={28} align="center" gutterBottom marginBottom={6}>
      Programming Mentor Quiz
    </Typography>
        <Typography variant="h6" className={classes.question}>
          {currentQuestionData.question}
        </Typography>
        <List>
          {currentQuestionData.options.map((option, index) => (
            <ListItem key={index}>
              <ListItemButton
                onClick={() => handleAnswerSelect(option)}
                // sx={listItemStyle}
                className={classes.listItem}
              >
                {option}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" color="textSecondary" className={classes.timer}>
          Time remaining: {timer} seconds
        </Typography>
      </Paper>
    ) : (
      <Paper elevation={3} className={classes.completedPaper}>
        <Typography variant="h5" align="center" gutterBottom className={classes.completedTitle}>
          Quiz Completed
        </Typography>
        <Button
          variant="contained"
          className={classes.continueButton}
          onClick={checkAnswers}
          fullWidth
        >
          Continue
        </Button>
      </Paper>
    )}
  </Container>
  </div>
  );
};

export default QuizScreen;
