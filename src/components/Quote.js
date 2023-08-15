import React from 'react';
import Header from './Header';
import './Quote.css';

const Quote = () => {
  <Header />;
  return (
    <div className="quote">
      <p className="description">
        Mathematics is the language of science.
        It is the language of logic and reason.
        It is the language of the universe.
        Without mathematics, we would not be able
        to understand the world around us. We would
        not be able to make predictions about the future.
        We would not be able to create new technologies.
        Mathematics is essential to our understanding
        of the world and our ability to shape it.
      </p>
      <big>
        <b className="author">
          Paul Erdős, a Hungarian mathematician known to be
          one of the greatest mathematicians of the 20th century
        </b>
      </big>
    </div>
  );
};

export default Quote;
