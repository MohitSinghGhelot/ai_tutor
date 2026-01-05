// import axios from "axios";

// const GEMINI_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// export const askGemini = async (question) => {
//   try {
//     const response = await axios.post(
//       `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
//       {
//         contents: [
//           {
//             role: "user",
//             parts: [{ text: question }],
//           },
//         ],
//       }
//     );

//     return response.data.candidates[0].content.parts[0].text;
//   } catch (error) {
//     console.error(
//       "❌ Gemini API Error:",
//       error.response?.data || error.message
//     );
//     return "Sorry, I couldn't process that right now.";
//   }
// };


import axios from "axios";

const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";

export const askGemini = async (question) => {
  try {
    const response = await axios.post(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: question }],
          },
        ],
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    // Log the specific error to see if you hit a limit
    console.error(
      "❌ Gemini API Error:",
      error.response?.data?.error?.message || error.message
    );
    
    if (error.response?.status === 429) {
      return "I'm a bit overwhelmed right now. Please try again in a moment.";
    }
    
    return "Sorry, something went wrong.";
  }
};
