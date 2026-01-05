import axios from "axios";

const BASE_URL = "http://localhost:5000/api/ask";

export const askTutor = async (question: string): Promise<string> => {
  const response = await axios.post(`${BASE_URL}/ask`, {
    question,
  });

  return response.data.answer;
};
