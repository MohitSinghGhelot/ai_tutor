// // check-models.js
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const API_KEY = process.env.GEMINI_API_KEY;

// const listModels = async () => {
//   try {
//     console.log("🔍 Checking available models...");
//     const response = await axios.get(
//       `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
//     );

//     const models = response.data.models;
//     console.log("\n✅ AVAILABLE MODELS:");
//     models.forEach((model) => {
//       // Only show models that can generate content
//       if (model.supportedGenerationMethods.includes("generateContent")) {
//         console.log(`• ${model.name.replace("models/", "")}`);
//       }
//     });
//   } catch (error) {
//     console.error("❌ Error fetching models:", error.response?.data || error.message);
//   }
// };

// listModels();