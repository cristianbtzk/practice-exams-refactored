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

  const startTest = useCallback(() => {
    setQuestions([
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

    setCurrentQuestion({
      number: 1,
      type: 'Matemática e suas tecnologias',
      answer: '',
    });
  }, []);

  const finishTest = useCallback(() => {
    setQuestions([]);
  }, []);

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
      value={{
        startTest,
        finishTest,
        questions,
        editAnswers,
        currentQuestion,
        setQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

function useQuestions() {
  const context = useContext(QuestionsContext);

  return context;
}

QuestionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useQuestions, QuestionsProvider };
