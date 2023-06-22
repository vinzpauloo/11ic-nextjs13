// ** Hooks Imports **
import { useCheckAuthentication } from "@/hooks/useCheckAuthentication";

// ** Library Imports
import request from "../lib/request";

// =================================================================
export default function useAPI(customHeaders: Record<string, string> = {}) {
  // ** Token **
  const { bearerToken } = useCheckAuthentication();

  // ** Header Hook **
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: bearerToken,
  };
  const headers = { ...defaultHeaders, ...customHeaders };

  const apiRequest = <Params = unknown, Data = unknown>(
    url: string,
    method: string,
    params?: Params | undefined,
    data?: Data
  ): Promise<any> => {
    return request({
      headers,
      url,
      method,
      params,
      data,
    });
  };

  return {
    headers,
    apiRequest,
  };
}
