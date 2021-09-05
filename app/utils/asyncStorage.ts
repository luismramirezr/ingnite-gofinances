import AS from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_KEY } from 'app/config/constants';

class AsyncStorage {
  public collectionKey: string;

  constructor(key: string) {
    this.collectionKey = key;
  }

  public getKey(key: string) {
    return `${this.collectionKey}:${key}`;
  }

  public async save(key: string, data: any, stringify = true) {
    const formattedKey = this.getKey(key);
    const formmatedData = stringify ? JSON.stringify(data) : data;
    try {
      await AS.setItem(formattedKey, formmatedData);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async get<T = any>(key: string, parse = true) {
    const formattedKey = this.getKey(key);
    try {
      const data = await AS.getItem(formattedKey);
      if (!data) return null;
      const formattedData = parse ? JSON.parse(data) : data;
      return formattedData as T;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  public async delete(key: string) {
    const formattedKey = this.getKey(key);
    try {
      await AS.removeItem(formattedKey);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async pushToArray(key: string, data: any) {
    try {
      const oldData = (await this.get<any[]>(key)) || [];
      await this.save(key, [...oldData, data]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default new AsyncStorage(ASYNC_STORAGE_KEY);
