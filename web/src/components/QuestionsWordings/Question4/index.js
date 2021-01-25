import PropTypes from 'prop-types';

import React from 'react';

import { Content } from './styles';
import RadioInput from '../../RadioInput';
import OptionsContainer from '../../OptionsContainer';

const Question4 = ({ handleChangeAnswer }) => (
  <>
    <Content>
      <p>
        Um gerente decidiu fazer um estudo financeiro da empresa onde trabalha
        analisando as receitas anuais dos três últimos anos. Tais receitas são
        apresentadas no quadro:
      </p>

      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Receita (bilhão de reais)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I</td>
            <td>2,2</td>
          </tr>
          <tr>
            <td>II</td>
            <td>4,2</td>
          </tr>
          <tr>
            <td>III</td>
            <td>7,4</td>
          </tr>
        </tbody>
      </table>

      <p>
        Estes dados serão utilizados para projetar a receita mínima esperada
        para o ano atual (ano IV), pois a receita esperada para o ano IV é
        obtida em função das variações das receitas anuais anteriores,
        utilizando a seguinte regra: a variação do ano IV para o ano III será
        igual à variação do ano III para o II adicionada à média aritmética
        entre essa variação e a variação do ano II para o I.
      </p>

      <p>O valor da receita mínima esperada, em bilhão de reais, será de:</p>

      <OptionsContainer handleChangeAnswer={handleChangeAnswer}>
        <RadioInput letter="A" name="option" value="a" id="a">
          10
        </RadioInput>
        <RadioInput letter="B" name="option" value="b" id="b">
          12
        </RadioInput>
        <RadioInput letter="C" name="option" value="c" id="c">
          13,2
        </RadioInput>
        <RadioInput letter="D" name="option" value="d" id="d">
          16,8
        </RadioInput>
      </OptionsContainer>
    </Content>
  </>
);

export default Question4;

Question4.propTypes = {
  handleChangeAnswer: PropTypes.func.isRequired,
};
