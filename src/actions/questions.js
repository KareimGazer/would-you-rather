export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}
