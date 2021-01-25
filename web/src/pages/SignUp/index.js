import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Icons } from './styles';
import api from '../../services/api';

import iconsImg from '../../assets/Icons.svg';
import element01Img from '../../assets/element01.svg';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await api.post('/users', {
          name,
          email,
          password,
        });

        history.push('/');
      } catch (err) {
        alert('Erro ao cadastrar.');
      }
    },
    [name, email, password]
  );

  return (
    <Container>
      <img src={element01Img} alt="Teste" />
      <Form onSubmit={handleSubmit}>
        <h1>Cadastre-se!</h1>

        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
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
        <Link to="/">
          <FiArrowLeft />
          <p>Já tenho cadastro!</p>
        </Link>

        <button type="submit">Enviar</button>
      </Form>
      <Icons>
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
      </Icons>
    </Container>
  );
};

export default SignUp;
