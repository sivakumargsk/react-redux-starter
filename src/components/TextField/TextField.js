import React from 'react';

const TextField = props => {
  const { touched, errorText, ...rest } = props;
  return (
    <div>
      <input {...rest} />
      {touched && errorText && (
        <div>
          <span style={{ color: 'red' }}>{errorText}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;
