const questions = require('../src/questions');

it('should have four questions', () => {
  expect(questions.length).toBe(4);
});
