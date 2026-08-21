import { useEffect, useState } from 'react';

const DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function pad2(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

export function useClock(intervalMs = 15000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const time = `${now.getHours()}:${pad2(now.getMinutes())}`;
  const shortDate = `${pad2(now.getDate())}/${pad2(now.getMonth() + 1)}/${now.getFullYear()}`;
  const longDate = `${DOW[now.getDay()]}, ${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  const dowMonthDate = `${DOW[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]}`;

  return { now, time, shortDate, longDate, dowMonthDate, DOW, MONTHS };
}
