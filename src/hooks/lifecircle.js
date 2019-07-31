import { useCallback, useEffect } from 'react';

export function useDidMount(callback) {
  const cb = useCallback(callback, []);

  useEffect(() => {
    cb();
  }, [cb]);
}

export function useWillUnmount(callback) {
  const cb = useCallback(callback, []);

  useEffect(() => {
    return () => cb();
  }, [cb]);
}
