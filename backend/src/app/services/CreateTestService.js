import TestsRepository from '../repositories/TestsRepository';

export default {
  async execute({ user_id, answers }) {
    let score = 0;

    const correctedAnswers = answers.map(answer => {
      let is_correct = false;
      switch (answer.number) {
        case 1: {
          if (answer.answer === 'a') {
            is_correct = true;
            score += 250;
          }
          break;
        }
        case 2: {
          if (answer.answer === 'e') {
            is_correct = true;
            score += 250;
          }
          break;
        }
        case 3: {
          if (answer.answer === 'a') {
            is_correct = true;
            score += 250;
          }
          break;
        }

        case 4: {
          if (answer.answer === 'c') {
            is_correct = true;
            score += 250;
          }

          break;
        }

        default: {
          is_correct = false;
        }
      }

      const answerCorrected = {
        ...answer,
        is_correct,
      };

      return answerCorrected;
    });

    const test = await TestsRepository.create({
      score,
      user_id,
      answers: correctedAnswers,
    });

    const { id } = test;

    return { id, score };
  },
};
