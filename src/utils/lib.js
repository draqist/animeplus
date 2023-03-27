import axios from "axios";

const waitlistAPI = axios.create({
  baseURL: "http://chatfic-lb-1532766351.eu-west-1.elb.amazonaws.com",
});

export const signInUser = async (token, name) => {
  const response = await waitlistAPI.post("/account", {
    token,
  });
  return response;
};

export const getUserDetails = async () => {
  const response = await waitlistAPI.get("/account/details", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getChats = async () => {
  const response = await waitlistAPI.get("/chat/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const createChat = async () => {
  let payload = {
    token,
  };
  const response = await waitlistAPI.post("/chat/", payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const deleteChat = async (chatId) => {
  const response = await waitlistAPI.delete(`/chat/${chatId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getMessages = async (chatId) => {
  const response = await waitlistAPI.get(`/chat/${chatId}/messages`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const sendMessage = async (chatId, text) => {
  let payload = {
    text,
  };
  const response = await waitlistAPI.post(`/chat/${chatId}/messages`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const pollMessages = async (chatId) => {
  const response = await waitlistAPI.get(`/chat/${chatId}/poll`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const genPaymentLink = async (plan) => {
  // plan = "starter" or "premium"
  const response = await waitlistAPI.get(`/payment/init/${plan}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
