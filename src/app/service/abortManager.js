// abortManager.js
const abortControllers = new Set();

export const addAbortController = (controller) => {
  abortControllers.add(controller);
};

export const removeAbortController = (controller) => {
  abortControllers.delete(controller);
};

export const cancelAllRequests = () => {
  abortControllers.forEach((controller) => controller.abort());
  abortControllers.clear();
};
