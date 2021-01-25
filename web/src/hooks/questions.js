import React, { createContext, useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    { number: 1, type: 'Matemática e suas tecnologias', answer: '' },
    { number: 2, type: 'Matemática e suas tecnologias', answer: '' },
    {
      number: 3,
      type: 'Prova: Ciências da Natureza e suas tecnologias',
      answer: '',
    },
    {
      number: 4,
      type: 'Prova: Ciências da Natureza e suas tecnologias',
      answer: '',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  const setQuestion = useCallback(
    (number) => {
      const findQuestion = questions.find(
        (question) => question.number === number
      );
      if (!findQuestion) {
        return;
      }
      setCurrentQuestion(findQuestion);
    },
    [questions]
  );

  const editAnswers = useCallback(
    (number, answer) => {
      const questionssUpdated = questions.map((question) => {
        if (question.number === number) {
          const newQuestion = { ...question, answer };
          return newQuestion;
        }

        return question;
      });

      setQuestions(questionssUpdated);
    },
    [questions]
  );

  return (
    <QuestionsContext.Provider
      value={{ questions, editAnswers, currentQuestion, setQuestion }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

function useQuestions() {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('Context does not exist');
  }

  return context;
}

QuestionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useQuestions, QuestionsProvider };
