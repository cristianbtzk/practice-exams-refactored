import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Container, Form, Icons } from './styles';

import iconsImg from '../../assets/Icons.svg';
import element01Img from '../../assets/element01.svg';
import { useAuth } from '../../hooks/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await signIn({ email, password });

        toast.success('Bem vindo(a)!');
        history.push('/sign-up');
      } catch (err) {
        toast.error('Erro ao realizar login, cheque seus dados');
      }
    },
    [history, email, password, signIn]
  );

  return (
    <Container>
      <img src={element01Img} alt="Teste" />
      <Form onSubmit={handleSubmit}>
        <h1>Iniciar Simulado</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <Link to="/sign-up">
          <FiLogIn />
          <p>Não possui uma conta? Cadastre-se!</p>
        </Link>

        <button type="submit">Entrar</button>
      </Form>
      <Icons>
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
      </Icons>
    </Container>
  );
};

export default SignIn;
