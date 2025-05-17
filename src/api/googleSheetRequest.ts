import { sheetNameTypes } from '../app/constants/sheetTypes';
import { ADD_DATA_TO_GOOGLE_SHEET_ROUTE } from '../app/constants/routes';
import API from './api';

export const addDataToGoogleSheetRequest = async (sheetName: sheetNameTypes, data: string[]) => {
  try {
    const res = await API.post(ADD_DATA_TO_GOOGLE_SHEET_ROUTE, {
      sheetName,
      data
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};