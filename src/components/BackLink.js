import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = props => {
  return (
    <Link to="/">
      <div>Back</div>
    </Link>
  );
};

export default BackLink;
