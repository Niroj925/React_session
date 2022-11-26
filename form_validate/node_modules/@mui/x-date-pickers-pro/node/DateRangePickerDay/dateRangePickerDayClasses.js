"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateRangePickerDayClasses = void 0;
exports.getDateRangePickerDayUtilityClass = getDateRangePickerDayUtilityClass;

var _material = require("@mui/material");

function getDateRangePickerDayUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiDateRangePickerDay', slot);
}

const dateRangePickerDayClasses = (0, _material.generateUtilityClasses)('MuiDateRangePickerDay', ['root', 'rangeIntervalDayHighlight', 'rangeIntervalDayHighlightStart', 'rangeIntervalDayHighlightEnd', 'rangeIntervalPreview', 'rangeIntervalDayPreview', 'rangeIntervalDayPreviewStart', 'rangeIntervalDayPreviewEnd', 'day', 'dayOutsideRangeInterval', 'dayInsideRangeInterval', 'notSelectedDate']);
exports.dateRangePickerDayClasses = dateRangePickerDayClasses;