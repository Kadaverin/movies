import { useState, useEffect, useCallback, useRef } from 'react';
import throttle from 'lodash.throttle';

function useInfiniteScroll({
  onFetchItems,
  canLoadMore,
  scrollable = false,
  threshold = 200,
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
  }, [ref, scrollable, threshold]);

  useEffect(() => {
    const throttledOnScroll = throttle(() => {
      if (canLoadMore && ref.current && isValidOffset()) {
        setShouldLoad(true);
      }
    }, 300);

    const scrollTarget = scrollable ? ref.current : window;

    if (scrollTarget) {
      scrollTarget.addEventListener('scroll', throttledOnScroll);
    }

    return () => {
      if (scrollTarget) {
        scrollTarget.removeEventListener('scroll', throttledOnScroll);
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
