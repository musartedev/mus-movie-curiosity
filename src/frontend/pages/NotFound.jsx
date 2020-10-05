import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="centered">
      <h2>Oops! Not Found!</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
