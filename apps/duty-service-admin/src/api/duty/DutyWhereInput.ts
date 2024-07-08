import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DutyWhereInput = {
  id?: StringFilter;
  duration?: IntNullableFilter;
  dateTime?: DateTimeNullableFilter;
};
