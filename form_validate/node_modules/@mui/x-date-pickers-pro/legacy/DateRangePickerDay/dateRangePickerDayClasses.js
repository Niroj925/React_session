import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getDateRangePickerDayUtilityClass(slot) {
  return generateUtilityClass('MuiDateRangePickerDay', slot);
}
export var dateRangePickerDayClasses = generateUtilityClasses('MuiDateRangePickerDay', ['root', 'rangeIntervalDayHighlight', 'rangeIntervalDayHighlightStart', 'rangeIntervalDayHighlightEnd', 'rangeIntervalPreview', 'rangeIntervalDayPreview', 'rangeIntervalDayPreviewStart', 'rangeIntervalDayPreviewEnd', 'day', 'dayOutsideRangeInterval', 'dayInsideRangeInterval', 'notSelectedDate']);