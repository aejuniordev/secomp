import { useEffect, useState } from 'react';

const UNITS = [
  { limit: 60, divisor: 1, unit: 'second' },
  { limit: 3600, divisor: 60, unit: 'minute' },
  { limit: 86400, divisor: 3600, unit: 'hour' },
  { limit: 2592000, divisor: 86400, unit: 'day' },
  { limit: 31536000, divisor: 2592000, unit: 'month' },
  { limit: Infinity, divisor: 31536000, unit: 'year' },
];

const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'always' });
const dtf = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

export function formatAbsoluteTime(date) {
  return dtf.format(new Date(date));
}

export function formatRelativeTime(date, now = new Date()) {
  const diffSeconds = Math.max(0, Math.round((now - new Date(date)) / 1000));
  const { divisor, unit } = UNITS.find((u) => diffSeconds < u.limit) ?? UNITS[UNITS.length - 1];
  const value = Math.round(diffSeconds / divisor);
  return rtf.format(-value, unit);
}

export function useRelativeTime(date, refreshMs = 30000) {
  const [label, setLabel] = useState(() => formatRelativeTime(date));

  useEffect(() => {
    const id = setInterval(() => setLabel(formatRelativeTime(date)), refreshMs);
    return () => clearInterval(id);
  }, [date, refreshMs]);

  return label;
}
