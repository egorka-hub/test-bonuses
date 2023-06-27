import axios from "axios";
import {ACCESS_KEY, CLIENT_ID, DEVICE_ID} from "./consts";

export async function getAccessToken(): Promise<string | void> {
  const requestPayload = {
    idClient: CLIENT_ID,
    accessToken: '',
    paramName: 'device',
    paramValue: DEVICE_ID,
    latitude: 0,
    longitude: 0,
    sourceQuery: 0,
  };

  try {
    const res = await axios.post(
      'http://84.201.188.117:5021/api/v3/clients/accesstoken',
      requestPayload,
      {
        headers: {
          AccessKey: ACCESS_KEY,
        },
      }
    );

    return res.data.accessToken;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
  }
}
