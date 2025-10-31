import React from 'react';
import { Grid } from '@mui/material';
import CalcButton from './CalcButton';

const ButtonPanel = ({ onInput, onCalculate, onClear, onAdvanced }) => {
  return (
    <Grid container spacing={1}>
      
      <Grid item xs={3}><CalcButton onClick={() => onAdvanced('sqrt')}>sqrt</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onAdvanced('pow')}>^</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('%')}>%</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={onClear} color="error">C</CalcButton></Grid>

      
      <Grid item xs={3}><CalcButton onClick={() => onInput('7')} variant="contained">7</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('8')} variant="contained">8</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('9')} variant="contained">9</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('/')} color="primary">/</CalcButton></Grid>
 
      <Grid item xs={3}><CalcButton onClick={() => onInput('4')} variant="contained">4</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('5')} variant="contained">5</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('6')} variant="contained">6</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('*')} color="primary">*</CalcButton></Grid>

   
      <Grid item xs={3}><CalcButton onClick={() => onInput('1')} variant="contained">1</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('2')} variant="contained">2</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('3')} variant="contained">3</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('-')} color="primary">-</CalcButton></Grid>
 
      <Grid item xs={6}><CalcButton onClick={() => onInput('0')} variant="contained">0</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('.')} variant="contained">.</CalcButton></Grid>
      <Grid item xs={3}><CalcButton onClick={() => onInput('+')} color="primary">+</CalcButton></Grid>
      <Grid item xs={12}><CalcButton onClick={onCalculate} color="success" variant="contained">=</CalcButton></Grid>
    </Grid>
  );
};

export default ButtonPanel;