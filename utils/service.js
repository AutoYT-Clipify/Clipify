import { Axios } from "axios";

export const generateUrlToThumbnail = async (url) => {
  const options = {
    method: "POST",
    url: "https://api.clipify.club:8000/generate_url_to_thumbnail",
    headers: {
      Authorization:
        "Bearer U6wdtse1tYYMGRBAj2PyQTqJZm5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv",
      "content-type": "application/json",
    },
    data: { url: url },
  };
  try {
    const { data } = await Axios(options);
    return data;
  } catch (error) {
    return error;
  }
};

export const generatePromptToThumbnail = async (prompt) => {
  const options = {
    method: "POST",
    url: "https://api.clipify.club:8000/generate_prompt_to_thumbnail",
    headers: {
      Authorization:
        "Bearer U6wdtse1tYYMGRBAj2PyQTqJZm5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv",
      "content-type": "application/json",
    },
    data: { prompt: prompt },
  };

  try {
    const { data } = await Axios(options);
    return data;
  } catch (error) {
    return error;
  }
};

export const generatePromptVideoAndSocialMediaPost = async (prompt, gender) => {
  const options = {
    method: "POST",
    url: "https://api.clipify.club:8000/generate_prompt_video_and_social_mendia_post",
    headers: {
      Authorization:
        "Bearer U6wdtse1tYYMGRBAj2PyQTqJZm5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv",
      "content-type": "application/json",
    },
    data: {
      prompt: prompt,
      language_code: "en",
      video_width: 512,
      video_height: 1024,
      video_length: 100,
      voice_type: gender,
    },
  };
  try {
    const { data } = await Axios(options);
    return data;
  } catch (error) {
    return error;
  }
};

export const generateUrlVideoAndSocialMediaPost = async (url, gender) => {
  const options = {
    method: "POST",
    url: "https://api.clipify.club:8000/generate_url_video_and_social_mendia_post",
    headers: {
      Authorization:
        "Bearer U6wdtse1tYYMGRBAj2PyQTqJZm5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv",
      "content-type": "application/json",
    },
    data: {
      url: url,
      video_width: 512,
      language_code: "fr",
      video_height: 1024,
      video_length: 100,
      voice_type: gender,
    },
  };
  try {
    const { data } = await Axios(options);
    return data;
  } catch (error) {
    return error;
  }
};
