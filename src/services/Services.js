import axios from "axios";

export const getTranslations = async (data) => {
  const response = await axios({
    method: "POST",
    url: "https://reqres.in/api/workintech",
    data,
  });
  return response;
};
