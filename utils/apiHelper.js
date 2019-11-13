import axios from "axios";

export const formHandler = (subject, name, email, text, data) => {
  const requestData = {
    subject,
    name,
    email,
    text
  };

  return axios.post(`/api/feedback`, requestData);
};

export const newsletterHandler = (email, subscription_interval) => {
  const requestData = {
    email,
    subscription_interval
  };
  return axios.post(`/api/newsletter`, requestData);
};
