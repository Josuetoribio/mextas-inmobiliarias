export const formatMXN = (n, currency = 'MXN') => '$' + Math.round(n).toLocaleString('en-US') + (currency ? ' ' + currency : '');
