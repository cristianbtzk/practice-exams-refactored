import PropTypes from 'prop-types';

import React from 'react';

import { IoMdMale, IoMdFemale } from 'react-icons/io';
import { Content } from './styles';

import RadioInput from '../../RadioInput';
import OptionsContainer from '../../OptionsContainer';

const Question3 = ({ handleChangeAnswer }) => (
  <>
    <Content>
      <p>
        Um pesquisador observou, em uma árvore, um ninho de uma espécie de
        falcão. Apenas um filhote apresentava uma coloração típica de penas de
        ambos os pais. Foram coletadas amostras de DNA dos pais e filhotes para
        caracterização genética dos alelos responsáveis pela coloração das
        penas. O perfil de bandas obtido para cada indivíduo do ninho para os
        lócus 1 e 2, onde se localizam os genes dessa característica, está
        representado na figura.
      </p>

      <strong>
        Padrões de bandas em gel das moléculas de DNA dos indivíduos
      </strong>

      <table>
        <thead>
          <tr>
            <td colSpan={4}>Pais</td>
            <td colSpan={4}>Filhotes</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>Lócus 1</td>
            <td aria-label="Empty" />
            <td>
              <IoMdMale />
            </td>
            <td>
              <IoMdFemale />
            </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Alelo A</td>
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
          </tr>
          <tr>
            <td>Alelo B</td>
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
          </tr>
          <tr>
            <td>Alelo C</td>
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
          </tr>
          <tr>
            <td>Alelo D</td>
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td colSpan={4}>Pais</td>
            <td colSpan={4}>Filhotes</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>Lócus 2</td>
            <td aria-label="Empty" />
            <td>
              <IoMdMale />
            </td>
            <td>
              <IoMdFemale />
            </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Alelo E</td>
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
          </tr>
          <tr>
            <td>Alelo F</td>
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
          </tr>
          <tr>
            <td>Alelo G</td>
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
          </tr>
          <tr>
            <td>Alelo H</td>
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
            <td aria-label="Empty" className="black" />
            <td aria-label="Empty" />
            <td aria-label="Empty" />
          </tr>
        </tbody>
      </table>
      <p>Dos filhotes, qual apresenta a coloração típica de penas dos pais?</p>

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
    </Content>
  </>
);

export default Question3;

Question3.propTypes = {
  handleChangeAnswer: PropTypes.func.isRequired,
};
