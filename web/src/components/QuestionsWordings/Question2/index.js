import React from 'react';
import PropTypes from 'prop-types';

import { MathComponent } from 'mathjax-react';
import { Content, Column } from './styles';

import RadioInput from '../../RadioInput';
import OptionsContainer from '../../OptionsContainer';

const Question2 = ({ handleChangeAnswer }) => (
  <>
    <Content>
      <Column>
        <p>
          Um aluno registrou as notas bimestrais de algumas de suas disciplinas
          numa tabela. Ele observou que as entradas numéricas da tabela formavam
          uma matriz 4x4, e que poderia calcular as médias anuais dessas
          disciplinas usando produto de matrizes. Todas as provas possuíam o
          mesmo peso, e a tabela que ele conseguiu é mostrada a seguir.
        </p>

        <table>
          <thead>
            <tr>
              <th aria-label="Empty" />

              <th>1º bimestre</th>
              <th>2º bimestre</th>
              <th>3º bimestre</th>
              <th>4º bimestre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matemática</td>
              <td>5,9</td>
              <td>6,2</td>
              <td>4,5</td>
              <td>5,5</td>
            </tr>
            <tr>
              <td>Português</td>
              <td>6,6</td>
              <td>7,1</td>
              <td>6,5</td>
              <td>8,4</td>
            </tr>
            <tr>
              <td>Geografia</td>
              <td>8,6</td>
              <td>6,8</td>
              <td>7,8</td>
              <td>9,0</td>
            </tr>
            <tr>
              <td>História</td>
              <td>6,2</td>
              <td>5,6</td>
              <td>5,9</td>
              <td>7,7</td>
            </tr>
          </tbody>
        </table>
      </Column>
      <Column>
        <p>
          Para obter essas médias, ele multiplicou a matriz obtida a partir da
          tabela por
        </p>
        <OptionsContainer handleChangeAnswer={handleChangeAnswer}>
          <RadioInput letter="A" name="option" value="a" id="a">
            <MathComponent
              tex={String.raw`
          \left[\begin{array}{rrrr}
            \frac{1}{2} & \frac{1}{2} & \frac{1}{2} & \frac{1}{2} \\
          \end{array}\right]
        `}
            />
          </RadioInput>
          <RadioInput letter="B" name="option" value="b" id="b">
            <MathComponent
              tex={String.raw`
          \left[\begin{array}{rrrr}
            \frac{1}{4} & \frac{1}{4} & \frac{1}{4} & \frac{1}{4} \\
          \end{array}\right]
        `}
            />
          </RadioInput>
          <RadioInput letter="C" name="option" value="c" id="c">
            <MathComponent
              tex={String.raw`
          \left[\begin{array}{rrrr}
            1 \\
            1 \\
            1 \\
            1 \\
          \end{array}\right]
        `}
            />
          </RadioInput>
          <RadioInput letter="D" name="option" value="d" id="d">
            <MathComponent
              tex={String.raw`
          \left[\begin{array}{rrrr}
            \frac{1}{2} \\
            \frac{1}{2} \\
            \frac{1}{2} \\
            \frac{1}{2} \\
          \end{array}\right]
        `}
            />
          </RadioInput>
          <RadioInput letter="E" name="option" value="e" id="e">
            <MathComponent
              tex={String.raw`
          \left[\begin{array}{rrrr}
            \frac{1}{4} \\
            \frac{1}{4} \\
            \frac{1}{4} \\
            \frac{1}{4} \\
          \end{array}\right]
        `}
            />
          </RadioInput>
        </OptionsContainer>
      </Column>
    </Content>
  </>
);

Question2.propTypes = {
  handleChangeAnswer: PropTypes.func.isRequired,
};

export default Question2;
