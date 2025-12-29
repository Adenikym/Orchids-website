import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const Api = setupInterceptorsTo(client);

export const handleApiError = (error) => {
  if (error.response)
    return {
      message: error.response.data.error,
      special_status: error.response.data.special_status,
      status: error.response.data.status,
    };

  if (error.message) return error.message;

  const { response } = error;
  const { data } = response;

  switch (response.status) {
    case 400:
      return (
        (data.error && JSON.stringify(data.error)) ||
        data.message ||
        "Something went wrong"
      );
    case 404:
      return data.message || "Resource not found";
    case 409:
      return "A duplicate already exists";
    default:
      return "Something went wrong";
  }
};

export default Api;