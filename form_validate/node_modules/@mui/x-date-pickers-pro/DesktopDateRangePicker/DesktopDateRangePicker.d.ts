import * as React from 'react';
import { DesktopWrapperProps, DesktopWrapperSlotsComponent, DesktopWrapperSlotsComponentsProps, DateInputSlotsComponent } from '@mui/x-date-pickers/internals';
import { DateRangePickerViewSlotsComponent, DateRangePickerViewSlotsComponentsProps } from '../DateRangePicker/DateRangePickerView';
import { BaseDateRangePickerProps } from '../DateRangePicker/shared';
export interface DesktopDateRangePickerSlotsComponent extends DesktopWrapperSlotsComponent, DateRangePickerViewSlotsComponent, DateInputSlotsComponent {
}
export interface DesktopDateRangePickerSlotsComponentsProps extends DesktopWrapperSlotsComponentsProps, DateRangePickerViewSlotsComponentsProps {
}
export interface DesktopDateRangePickerProps<TInputDate, TDate> extends BaseDateRangePickerProps<TInputDate, TDate>, DesktopWrapperProps {
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<DesktopDateRangePickerSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<DesktopDateRangePickerSlotsComponentsProps>;
}
declare type DesktopDateRangePickerComponent = (<TInputDate, TDate = TInputDate>(props: DesktopDateRangePickerProps<TInputDate, TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 *
 * - [DesktopDateRangePicker API](https://mui.com/x/api/date-pickers/desktop-date-range-picker/)
 */
export declare const DesktopDateRangePicker: DesktopDateRangePickerComponent;
export {};
