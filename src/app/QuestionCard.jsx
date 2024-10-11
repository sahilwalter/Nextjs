import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  LinearProgress,
  createTheme,
  ThemeProvider,
  StepConnector,
} from '@mui/material';
import { styled } from '@mui/system'; // Replacing @mui/styles
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Teal color
    },
    secondary: {
      main: '#FF6347', // Red color for accents
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

// Custom connector using styled
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& .MuiStepConnector-line': {
      backgroundColor: theme.palette.primary.main, // Glowing line when active
    },
  },
  completed: {
    '& .MuiStepConnector-line': {
      backgroundColor: theme.palette.primary.main, // Glowing line when completed
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#ccc',
    borderRadius: 1,
  },
}));

const steps = [
  { label: 'Basic Info', icon: <PersonIcon /> },
  { label: 'Spending', icon: <HomeIcon /> },
  { label: 'Relationships', icon: <StarIcon /> },
];

// Styled component for the glowing icon
const GlowingIcon = styled('div')(() => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '10px',
  backgroundColor: '#008080', // Solid green color
  color: '#fff', // Icon color
}));

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
    // Basic Info Questions
    [
      { question: 'What is your age?', type: 'text', name: 'age' },
      { question: 'What is your sex?', type: 'radio', name: 'sex', options: ['Male', 'Female', 'Other'] },
      { question: 'Income Frequency?', type: 'radio', name: 'incomeFrequency', options: ['Monthly', 'Annually'] },
      { question: 'What is your income amount?', type: 'text', name: 'incomeAmount' },
    ],
    // Spending Questions
    [
      { question: 'Total monthly expenses?', type: 'text', name: 'totalMonthlyExpenses' },
      { question: 'Rent/Mortgage expense?', type: 'text', name: 'rentMortgage' },
      { question: 'Dining out expenses?', type: 'text', name: 'diningOut' },
      { question: 'Entertainment expenses?', type: 'text', name: 'entertainment' },
      { question: 'Health/Beauty/Fitness expenses?', type: 'text', name: 'healthBeautyFitness' },
      { question: 'Shopping expenses (non-grocery)?', type: 'text', name: 'shopping' },
    ],
    // Relationships Questions
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
      // Log data to console or handle final submission
      console.log('Final Form Data:', formData);

      // Move to the next step
      if (activeStep < steps.length - 1) {
        setCurrentQuestionIndex(0);
        setActiveStep((prevStep) => prevStep + 1);
      } else {
        // Reset or finish the questionnaire if at the last step
        alert('Thank you for completing the questions!');
        // Optional: Reset state for a new round of questions
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
      {/* Body background color */}
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Stepper with glowing icons and lines */}
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<CustomStepConnector />} // Use custom connector
            style={{ marginBottom: '20px' }}
          >
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconProps={{
                    style: {
                      color: (index < activeStep) ? theme.palette.primary.main : '#ccc',
                    },
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Icon and text below the stepper component */}
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <GlowingIcon>
              {steps[activeStep].icon} {/* Render the icon based on active step */}
            </GlowingIcon>
            <Typography
              variant="h6" // Change variant for different text sizes
              style={{
                fontWeight: 'bold', // Make text bold
                fontSize: '24px', // Change font size as needed
                color: '#333', // Change text color as needed
                marginTop: '10px', // Space above the text
              }}
            >
              {/* Change this question according to your requirement */}
              {activeStep === 0
                ? 'What would you like to know about your basic info?'
                : activeStep === 1
                ? 'What would you like to know about your spending?'
                : 'What would you like to know about your relationships?'}
            </Typography>
          </div>

          {/* Question card */}
          <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Typography variant="h6" style={{ marginBottom: '10px' }}>
                {activeStep === 0 ? 'Basic Info' : activeStep === 1 ? 'Spending' : 'Relationships'}
              </Typography>
              
              {/* Progress bar for the current question */}
              <LinearProgress variant="determinate" value={((currentQuestionIndex + 1) / getQuestionCount(activeStep)) * 100} />

              {/* Render the current question */}
              <Typography style={{ margin: '20px 0' }}>
                {questions[activeStep][currentQuestionIndex].question}
              </Typography>

              {/* Render input fields based on question type */}
              {questions[activeStep][currentQuestionIndex].type === 'text' ? (
                <TextField
                  fullWidth
                  variant="outlined"
                  name={questions[activeStep][currentQuestionIndex].name}
                  value={formData[questions[activeStep][currentQuestionIndex].name] || ''}
                  onChange={handleChange}
                />
              ) : (
                <RadioGroup
                  name={questions[activeStep][currentQuestionIndex].name}
                  value={formData[questions[activeStep][currentQuestionIndex].name] || ''}
                  onChange={handleChange}
                >
                  {questions[activeStep][currentQuestionIndex].options.map((option) => (
                    <FormControlLabel key={option} control={<Radio />} label={option} value={option} />
                  ))}
                </RadioGroup>
              )}

              {/* Navigation buttons */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackIosIcon />}
                  onClick={handlePrev}
                  disabled={activeStep === 0 && currentQuestionIndex === 0}
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
