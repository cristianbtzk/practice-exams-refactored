import React from 'react';
import PropTypes from 'prop-types';

import { MathComponent } from 'mathjax-react';

import { Content, Grid } from './styles';
import RadioInput from '../../RadioInput';

import OptionsContainer from '../../OptionsContainer';

const Question1 = ({ handleChangeAnswer }) => (
  <>
    <Content>
      <p>
        A Transferência Eletrônica Disponível (TED) é uma transação financeira
        de valores entre diferentes bancos. Um economista decide analisar os
        valores enviados por meio de TEDs entre cinco bancos (1,2, 3, 4 e 5)
        durante um mês. Para isso, ele dispõe esses valores em uma matriz A =
        [aij], em que 1 ≤ i ≤ 5 e 1 ≤ j ≤ 5, e o elemento aij corresponde ao
        total proveniente das operações feitas via TED, em milhão de real,
        transferidos do banco i para o banco j durante o mês. Observe que os
        elementos aij = 0, uma vez que TED é uma transferência entre bancos
        distintos. Esta é a matriz obtida para essa análise:
      </p>
      <Grid>
        <MathComponent
          tex={String.raw`
            A =
          \left[\begin{array}{rrrrr}
            0 & 2 & 0 & 2 & 2 \\
            0 & 0 & 2 & 1 & 0 \\
            1 & 2 & 0 & 1 & 1 \\
            0 & 2 & 2 & 0 & 0 \\
            3 & 0 & 1 & 1 & 0 \\
          \end{array}\right]
        `}
        />
        <div>
          <p>
            Com base nessas informações, o banco que transferiu a maior quantia
            via TED é o banco
          </p>
          <OptionsContainer handleChangeAnswer={handleChangeAnswer}>
            <RadioInput letter="A" name="option" value="a" id="a">
              1
            </RadioInput>
            <RadioInput letter="B" name="option" value="b" id="b">
              2
            </RadioInput>
            <RadioInput letter="C" name="option" value="c" id="c">
              3
            </RadioInput>
            <RadioInput letter="D" name="option" value="d" id="d">
              4
            </RadioInput>
          </OptionsContainer>
        </div>
      </Grid>
    </Content>
  </>
);

Question1.propTypes = {
  handleChangeAnswer: PropTypes.func.isRequired,
};

export default Question1;
