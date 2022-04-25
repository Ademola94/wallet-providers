import React from 'react'
import { Grid } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//file
const Home = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>Home Page</Item>
      </Grid>
    </Grid>
  )
}

export default Home
