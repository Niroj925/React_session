export const parseRangeInputValue = (utils, value = [null, null]) => value.map(date => {
  if (date === null || !utils.isValid(date)) {
    return null;
  }

  return utils.startOfDay(utils.date(date));
});
export const isRangeValid = (utils, range) => {
  return Boolean(range && range[0] && range[1] && !utils.isBefore(range[1], range[0]));
};
export const isWithinRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isWithinRange(day, range);
};
export const isStartOfRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
};
export const isEndOfRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
};