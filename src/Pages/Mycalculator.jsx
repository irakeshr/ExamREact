import React, { useState } from 'react';
import { Container, Paper, Box,Button } from '@mui/material';
import Display from '../Components/Display';
import ButtonPanel from '../Components/ButtonPanel';
import { Link } from 'react-router-dom'; // Keep this import
 
 

 
const Mycalculator = () => {
 
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

   
  const handleInput = (value) => { 
     
    if (result !== '0' && expression === '') {
      setResult('0');
    }
    setExpression((prev) => prev + value); 
  };

 const handleCalculate=()=>{
    try {
      setResult(eval(expression).toString());
    } catch (error) {
      setResult('Error');
      setExpression(''); // Clear expression on error
    }
 }

  const handleClear = () => {
    setExpression('');
    setResult('0');
  };

  const handleAdvanced = (func) => {
    if (func === 'sqrt') {
      try {
        setResult(Math.sqrt(eval(expression)).toString());
        setExpression(`sqrt(${expression})`); // Show the operation in the expression
      } catch (error) {
        setResult('Error');
        setExpression(''); // Clear expression on error
      }
      
    } else if (func === 'pow') {
 
      setExpression((prev) => `${prev}^`);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
        
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined">
            <Link to={"/posts"}>
            Go to Posts
            </Link>
          
        </Button>
      </Box>

      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <Display expression={expression} result={result} />
        <Box p={3}>
          <ButtonPanel
            onInput={handleInput}
            onCalculate={handleCalculate}
            onClear={handleClear}
            onAdvanced={handleAdvanced}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Mycalculator;