import React, { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  

  return (
    <div className="home">
      <h1>Welcome to the Survey Platform</h1>
      <p>This is the homepage of our survey platform.</p>
      <ButtonGroup variant="contained" aria-label="Large button group">

        <Link to = "/creator-login"><Button value="create">CREATE</Button></Link>
        <Link to = "/selected-user-login"><Button value="vote-email">VOTE BY EMAIL</Button></Link>
        <Link to = "/org-login"><Button value="vote-oauth">VOTE BY OAUTH</Button></Link>
      </ButtonGroup>
    </div>
  );
};

export default Home;
