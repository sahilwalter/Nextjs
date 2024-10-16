import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  LinearProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // Purple color
    },
    secondary: {
      main: '#D8BFD8', // Light purple for accents
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

// Styled components
const QuestionContainer = styled('div')(({ selected }) => ({
  backgroundColor: selected ? '#90EE90' : '#800080', // Light green if selected, purple otherwise
  borderRadius: '8px',
  padding: '10px',
  margin: '10px 0',
  color: '#fff', // White text
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
  cursor: 'pointer',
  width: '100%', // Full width of the parent
  boxSizing: 'border-box', // Ensures padding is included in width calculation
}));

const CircleIcon = styled('div')(({ active }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: active ? '#800080' : '#B0B0B0', // Purple if active, grey otherwise
  borderRadius: '50%', // Circular shape
  width: '40px', // Circle diameter
  height: '40px', // Circle diameter
  margin: '0 auto', // Center the icon
}));

const steps = [
  { label: 'Basic Info', icon: <PersonIcon style={{ color: 'white' }} /> },
  { label: 'Spending', icon: <HomeIcon style={{ color: 'white' }} /> },
  { label: 'Relationships', icon: <StarIcon style={{ color: 'white' }} /> },
];

const QuestionCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    incomeFrequency: '',
    incomeAmount: '',
    totalMonthlyExpenses: '',
    rentMortgage: '',
    diningOut: '',
    entertainment: '',
    healthBeautyFitness: '',
    shopping: '',
    maritalStatus: '',
    hasKids: '',
    hasPets: '',
    solidGroupOfFriends: '',
  });

  const questions = [
    [
      { question: 'What is your age?', type: 'radio', name: 'age', options: ['Under 18', '18-25', '26-35', '36-45', '46+'] },
      { question: 'What is your sex?', type: 'radio', name: 'sex', options: ['Male', 'Female', 'Other'] },
      { question: 'Income Frequency?', type: 'radio', name: 'incomeFrequency', options: ['Monthly', 'Annually'] },
      { question: 'What is your income range?', type: 'radio', name: 'incomeAmount', options: ['Below $20k', '$20k-$50k', '$50k-$100k', '$100k+'] },
    ],
    [
      { question: 'Total monthly expenses?', type: 'radio', name: 'totalMonthlyExpenses', options: ['Below $1000', '$1000-$2000', '$2000-$4000', '$4000+'] },
      { question: 'Rent/Mortgage expense?', type: 'radio', name: 'rentMortgage', options: ['Below $500', '$500-$1000', '$1000-$2000', '$2000+'] },
      { question: 'Dining out expenses?', type: 'radio', name: 'diningOut', options: ['Below $100', '$100-$300', '$300-$500', '$500+'] },
      { question: 'Entertainment expenses?', type: 'radio', name: 'entertainment', options: ['Below $100', '$100-$300', '$300-$500', '$500+'] },
      { question: 'Health/Beauty/Fitness expenses?', type: 'radio', name: 'healthBeautyFitness', options: ['Below $100', '$100-$300', '$300-$500', '$500+'] },
      { question: 'Shopping expenses (non-grocery)?', type: 'radio', name: 'shopping', options: ['Below $100', '$100-$300', '$300-$500', '$500+'] },
    ],
    [
      { question: 'What is your marital status?', type: 'radio', name: 'maritalStatus', options: ['Single', 'Married', 'Divorced'] },
      { question: 'Do you have kids?', type: 'radio', name: 'hasKids', options: ['Yes', 'No'] },
      { question: 'Do you have pets?', type: 'radio', name: 'hasPets', options: ['Yes', 'No'] },
      { question: 'Do you have a solid group of friends?', type: 'radio', name: 'solidGroupOfFriends', options: ['Yes', 'No'] },
    ],
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < questions[activeStep].length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Check if the current step is the last step
      if (activeStep === steps.length - 1) {
        console.log('Final Form Data:', formData);
        alert('Thank you for completing the questions!');
        // Reset the form state
        setActiveStep(0);
        setCurrentQuestionIndex(0);
        setFormData({
          age: '',
          sex: '',
          incomeFrequency: '',
          incomeAmount: '',
          totalMonthlyExpenses: '',
          rentMortgage: '',
          diningOut: '',
          entertainment: '',
          healthBeautyFitness: '',
          shopping: '',
          maritalStatus: '',
          hasKids: '',
          hasPets: '',
          solidGroupOfFriends: '',
        });
      } else {
        // Move to the next step
        console.log('Final Form Data:', formData);
        setCurrentQuestionIndex(0);
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  };
  

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
      setCurrentQuestionIndex(questions[activeStep - 1].length - 1);
    }
  };

  const getQuestionCount = (step) => {
    return questions[step].length;
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Stepper activeStep={activeStep} alternativeLabel style={{ marginBottom: '20px' }}>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <CircleIcon active={index <= activeStep}>
                    {React.cloneElement(step.icon, {
                      style: {
                        color: index <= activeStep ? 'white' : 'white', // White icon color
                      },
                    })}
                  </CircleIcon>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                {activeStep === 0 ? 'Basic Info' : activeStep === 1 ? 'Spending' : 'Relationships'}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={((currentQuestionIndex + 1) / getQuestionCount(activeStep)) * 100}
                style={{ marginBottom: '10px' }}
              />

              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                {`${currentQuestionIndex + 1} / ${getQuestionCount(activeStep)}`}
              </Typography>

              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                {questions[activeStep][currentQuestionIndex].question}
              </Typography>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {questions[activeStep][currentQuestionIndex].options.map((option) => (
                  <QuestionContainer
                    key={option}
                    selected={formData[questions[activeStep][currentQuestionIndex].name] === option}
                    onClick={() => handleChange({ target: { name: questions[activeStep][currentQuestionIndex].name, value: option } })}
                  >
                    {option}
                  </QuestionContainer>
                ))}
              </div>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackIosIcon />}
                  onClick={handlePrev}
                >
                  Prev
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default QuestionCard;
