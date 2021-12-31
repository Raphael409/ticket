import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [ticket, setTicket] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((ticket) => {
          console.log(data);
          setTicket(Ticket);
          setIsPending(false);
          setError(null);
          console.log('here');
        })
        .catch((err) => {
          console.log(err);
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
  }, [url]);
};
export default useFetch;
