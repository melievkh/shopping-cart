export const getHour = (str) => {
  const date = new Date(str);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' yil avval';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' oy avval';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' kun avval';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' soat avval';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' daqiqa avval';
  }
  return Math.floor(seconds) + ' sekund avval';
};
