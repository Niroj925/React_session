import { MuiPickersAdapter } from '@mui/x-date-pickers/internals';
import { DateRange, NonEmptyDateRange } from '../models';
export declare const parseRangeInputValue: <TDate>(utils: MuiPickersAdapter<TDate>, value?: DateRange<any>) => DateRange<TDate>;
export declare const isRangeValid: <TDate>(utils: MuiPickersAdapter<TDate>, range: DateRange<TDate> | null) => range is NonEmptyDateRange<TDate>;
export declare const isWithinRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
export declare const isStartOfRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
export declare const isEndOfRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
