import Api from "./service/axios";

export async function initializePayment(data) {
  const response = await Api.post("donation/init", data);
  return response.data;
}