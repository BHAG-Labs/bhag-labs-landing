export const formatINR = (value: number): string => {
  if (Math.abs(value) >= 1e7) {
    return `₹${(value / 1e7).toFixed(2)} Cr`;
  }
  if (Math.abs(value) >= 1e5) {
    return `₹${(value / 1e5).toFixed(2)} L`;
  }
  return `₹${value.toLocaleString('en-IN')}`;
};

export const formatINRFull = (value: number): string => {
  return `₹${value.toLocaleString('en-IN')}`;
};

export const formatPercent = (value: number, decimals = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const parseINRInput = (value: string): number => {
  return Number(value.replace(/[^0-9.-]/g, '')) || 0;
};
