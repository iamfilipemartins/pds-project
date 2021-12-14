import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Content from './content';

const ForgetPassword = (): any => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setEmail('');
  }, []);

  return (
    <Container>
      <Content email={email} setEmail={setEmail} />
    </Container>
  );
};

export default ForgetPassword;
