import axios from "axios";
import {
  addAbortController,
  removeAbortController
} from "./abortManager";

const onRequest = async (config) => {
  // Attach AbortController for request cancellation
  const controller = new AbortController();
  config.signal = controller.signal;
  config._abortController = controller;

  addAbortController(controller);

  config.headers = {
    ...(config?.headers ?? {}),
    // Authorization can be added here if needed
  };

  return config;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  // Remove controller when request is complete
  if (response.config?._abortController) {
    removeAbortController(response.config._abortController);
  }
  return response;
};

const onResponseError = (error) => {
  // Remove controller on error as well
  if (error.config?._abortController) {
    removeAbortController(error.config._abortController);
  }
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
