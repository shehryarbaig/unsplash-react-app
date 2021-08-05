import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(window.innerHeight + document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.scrollHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;