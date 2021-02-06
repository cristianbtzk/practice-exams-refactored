import { renderHook, act } from '@testing-library/react-hooks';
import { QuestionsProvider, useQuestions } from '../../hooks/questions';

describe('Questions Hook', () => {
  it('should be able to set questions and set current question when test is started', async () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });

    expect(result.current.questions).toEqual([
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

    expect(result.current.currentQuestion).toEqual({
      number: 1,
      type: 'Matemática e suas tecnologias',
      answer: '',
    });
  });

  it('should be able to clean questions list', async () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });
    act(() => {
      result.current.finishTest();
    });

    expect(result.current.questions).toEqual([]);
  });

  it('should be able to clean questions list', async () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });
    act(() => {
      result.current.finishTest();
    });

    expect(result.current.questions).toEqual([]);
  });

  it('should be able to change current question', () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });

    act(() => {
      result.current.setQuestion(2);
    });

    expect(result.current.currentQuestion).toEqual({
      number: 2,
      type: 'Matemática e suas tecnologias',
      answer: '',
    });
  });

  it('should not change current question when the new question does not exist', () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });

    act(() => {
      result.current.setQuestion(7);
    });

    expect(result.current.currentQuestion).toEqual({
      number: 1,
      type: 'Matemática e suas tecnologias',
      answer: '',
    });
  });

  it('should be able to edit question answer', () => {
    const { result } = renderHook(useQuestions, { wrapper: QuestionsProvider });

    act(() => {
      result.current.startTest();
    });

    act(() => {
      result.current.editAnswers(2, 'b');
    });

    expect(result.current.questions).toContainEqual({
      number: 2,
      type: 'Matemática e suas tecnologias',
      answer: 'b',
    });
  });
});
