import React from 'react';

const Login = (props) => {
  const {
    history: { push },
  } = props;
  return (
    <div>
      <span>login</span>
      <button onClick={() => push('/')}>home</button>
    </div>
  );
};

export default Login;
