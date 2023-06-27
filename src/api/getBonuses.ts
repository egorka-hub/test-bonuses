import axios from "axios";
import {ACCESS_KEY} from './consts'

export interface BonusInfo {
  currentQuantity: number;
  dateBurning: string;
  forBurningQuantity: number;
  typeBonusName: string;
}

export async function getBonuses(token: string): Promise<BonusInfo | void> {
  try {
    const response = await axios.get(
      `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`,
      {
        headers: {
          AccessKey: ACCESS_KEY,
        },
      }
    );

    return response.data.data;

  } catch (error) {
    console.error('Failed to fetch client bonuses:', error);
  }
}
