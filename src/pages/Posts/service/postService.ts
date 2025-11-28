import { api } from "@/services/api.service";

export const fetchData = async function () {
  try {
    const data = api.get("/posts");
    return data;
  } catch (err) {
    throw err;
  }
};
