import * as React from 'react';
import { DesktopDateRangePickerProps, DesktopDateRangePickerSlotsComponent, DesktopDateRangePickerSlotsComponentsProps } from '../DesktopDateRangePicker';
import { MobileDateRangePickerProps, MobileDateRangePickerSlotsComponent, MobileDateRangePickerSlotsComponentsProps } from '../MobileDateRangePicker';
export interface DateRangePickerSlotsComponent extends MobileDateRangePickerSlotsComponent, DesktopDateRangePickerSlotsComponent {
}
export interface DateRangePickerSlotsComponentsProps extends MobileDateRangePickerSlotsComponentsProps, DesktopDateRangePickerSlotsComponentsProps {
}
export interface DateRangePickerProps<TInputDate, TDate> extends Omit<DesktopDateRangePickerProps<TInputDate, TDate>, 'components' | 'componentsProps'>, Omit<MobileDateRangePickerProps<TInputDate, TDate>, 'components' | 'componentsProps'> {
    /**
     * CSS media query when `Mobile` mode will be changed to `Desktop`.
     * @default '@media (pointer: fine)'
     * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
     */
    desktopModeMediaQuery?: string;
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<DateRangePickerSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<DateRangePickerSlotsComponentsProps>;
}
declare type DateRangePickerComponent = (<TInputDate, TDate = TInputDate>(props: DateRangePickerProps<TInputDate, TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
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
 * - [DateRangePicker API](https://mui.com/x/api/date-pickers/date-range-picker/)
 */
export declare const DateRangePicker: DateRangePickerComponent;
export {};
