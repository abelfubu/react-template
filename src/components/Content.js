import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import { Grid, CircularProgress } from '@material-ui/core';

const day = new Date().getDate();
const month = +new Date().getMonth() + 1;

const Content = () => {
  const [state, setstate] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://numbersapi.p.rapidapi.com/' +
          month +
          '/' +
          day +
          '/date?json=true&rapidapi-key=e5d3390ce6mshfb35d8d3bcf520bp1a668fjsn41c69dc9354c',
      )
      .then((response) => {
        setstate(response.data);
        console.log(state);
      })
      .catch((error) => {
        setstate('error');
      });
  }, []);

  return (
    <Grid container justify='space-around'>
      <Grid item xs={6}>
        {state ? (
          <Item key={state.number} number={state.year} text={state.text}>
            {state.text}
          </Item>
        ) : (
          <CircularProgress style={{ paddingTop: '100px' }} />
        )}
      </Grid>
    </Grid>
  );
};

export default Content;
