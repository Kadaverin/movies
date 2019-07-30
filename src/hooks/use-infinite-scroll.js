import { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from '../utils/helpers/throttle';

function useInfiniteScroll({
  onFetchItems,
  canLoadMore,
  scrollable = false,
  threshold = 300,
}) {
  const ref = useRef();

  const [shouldLoad, setShouldLoad] = useState(false);

  const isValidOffset = useCallback(() => {
    const list = ref.current;

    if (scrollable) {
      return (
        list.scrollTop + list.clientHeight >= list.scrollHeight - threshold
      );
    }

    return (
      window.scrollY + window.innerHeight >=
      list.clientHeight + list.offsetTop - threshold
    );
  }, [scrollable, threshold]);

  useEffect(() => {
    const throttleOnScroll = throttle(() => {
      if (canLoadMore && ref.current && isValidOffset()) {
        setShouldLoad(true);
      }
    });

    const scrollTarget = scrollable ? ref.current : window;

    if (scrollTarget) {
      scrollTarget.addEventListener('scroll', throttleOnScroll);
    }

    return () => {
      if (scrollTarget) {
        scrollTarget.removeEventListener('scroll', throttleOnScroll);
      }
    };
  }, [ref, scrollable, canLoadMore, isValidOffset]);

  useEffect(() => {
    if (shouldLoad) {
      onFetchItems();
      setShouldLoad(false);
    }
  }, [shouldLoad, onFetchItems]);

  return ref;
}

export { useInfiniteScroll };
