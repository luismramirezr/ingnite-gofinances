import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

function useAsyncLayoutEffect<D = any, P = any>(
  initialState: D,
  dependencyParams: Array<P>,
  callback: (params: Array<P>) => Promise<D>
): [D, boolean] {
  const [data, setData] = useState<D>(initialState);
  const [isFetching, setIsFetching] = useState(false);

  async function getData() {
    setIsFetching(true);
    const newData = await callback(dependencyParams);
    setData(newData);
    setIsFetching(false);
  }

  useFocusEffect(
    useCallback(() => {
      try {
        getData();
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }, [...dependencyParams])
  );

  return [data, isFetching];
}

export default useAsyncLayoutEffect;
