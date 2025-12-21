import Api from "./service/axios";

export async function initializePayment(data) {
  const response = await Api.post("https://orchids-backend.onrender.com/donation/init", data);
  return response.data;
}