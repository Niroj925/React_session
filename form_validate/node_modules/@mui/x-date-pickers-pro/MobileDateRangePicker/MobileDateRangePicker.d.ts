import * as React from 'react';
import { MobileWrapperProps, MobileWrapperSlotsComponent, MobileWrapperSlotsComponentsProps, DateInputSlotsComponent } from '@mui/x-date-pickers/internals';
import { DateRangePickerViewSlotsComponent, DateRangePickerViewSlotsComponentsProps } from '../DateRangePicker/DateRangePickerView';
import { BaseDateRangePickerProps } from '../DateRangePicker/shared';
export interface MobileDateRangePickerSlotsComponent extends MobileWrapperSlotsComponent, DateRangePickerViewSlotsComponent, DateInputSlotsComponent {
}
export interface MobileDateRangePickerSlotsComponentsProps extends MobileWrapperSlotsComponentsProps, DateRangePickerViewSlotsComponentsProps {
}
export interface MobileDateRangePickerProps<TInputDate, TDate> extends BaseDateRangePickerProps<TInputDate, TDate>, MobileWrapperProps {
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<MobileDateRangePickerSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<MobileDateRangePickerSlotsComponentsProps>;
}
declare type MobileDateRangePickerComponent = (<TInputDate, TDate = TInputDate>(props: MobileDateRangePickerProps<TInputDate, TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
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
 * - [MobileDateRangePicker API](https://mui.com/x/api/date-pickers/mobile-date-range-picker/)
 */
export declare const MobileDateRangePicker: MobileDateRangePickerComponent;
export {};
