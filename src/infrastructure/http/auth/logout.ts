import { httpErrorFormatter } from "@/shared/httpErrorFormatter";
import { api } from "../axios";

export const logout = async () => {
  try {
    await api.post('/auth/logout');
    return true;
  } catch (error:any) {
    const message = httpErrorFormatter(error)
    throw new Error(message);
  }
}