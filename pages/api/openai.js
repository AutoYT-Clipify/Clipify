import axios from "axios";

// const OPEN_AI_KEY = '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';
export const generateTwoWordsQuery = async (prompt) => {
  try {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write one or two words for this sentence to find a relevant image in response, nothing else, and I don't want the keyword 'video' in the response: ${prompt}`,
        },
      ],
    };

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
      },
      data: requestData,
    };

    const response = await axios(config);
    const result = response?.data?.choices[0]?.message?.content;

    return result;
  } catch (error) {
    console.error("Error in generateTwoWordsQuery:", error);
    throw error; // Re-throw the error for potential external handling.
  }
};
export const generateVideoTitle = async (prompt) => {
  try {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write few words title for this sentence, nothing else, and I don't want the keyword 'video' in the response: ${prompt}`,
        },
      ],
    };

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
      },
      data: requestData,
    };

    const response = await axios(config);
    const result = response?.data?.choices[0]?.message?.content;

    return result;
  } catch (error) {
    console.error("Error in generateTwoWordsQuery:", error);
    throw error; // Re-throw the error for potential external handling.
  }
};

export const generateCaption = async (prompt) => {
  try {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write a good caption for title for this sentence. I just want  good caption in reponse noting else. ${prompt}`,
        },
      ],
    };

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
      },
      data: requestData,
    };

    const response = await axios(config);
    const result = response?.data?.choices[0]?.message?.content;

    return result;
  } catch (error) {
    console.error("Error in generateTwoWordsQuery:", error);
    throw error; // Re-throw the error for potential external handling.
  }
};

export const generateImageFromPrompt = async (prompt) => {
  try {
    const requestData = {
      prompt,
      n: 1,
      size: "1024x1024",
    };

    const config = {
      method: "post",
      url: "https://api.openai.com/v1/images/generations",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
      },
      data: requestData,
    };

    const response = await axios(config);
    const generatedImage = response?.data?.data[0]?.url;
    return generatedImage;
  } catch (error) {
    console.error("Error in generateImageFromPrompt:", error);
    throw error; // Re-throw the error for potential external handling.
  }
};
