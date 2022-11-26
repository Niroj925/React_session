import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getDateRangePickerDayUtilityClass(slot) {
  return generateUtilityClass('MuiDateRangePickerDay', slot);
}
export const dateRangePickerDayClasses = generateUtilityClasses('MuiDateRangePickerDay', ['root', 'rangeIntervalDayHighlight', 'rangeIntervalDayHighlightStart', 'rangeIntervalDayHighlightEnd', 'rangeIntervalPreview', 'rangeIntervalDayPreview', 'rangeIntervalDayPreviewStart', 'rangeIntervalDayPreviewEnd', 'day', 'dayOutsideRangeInterval', 'dayInsideRangeInterval', 'notSelectedDate']);