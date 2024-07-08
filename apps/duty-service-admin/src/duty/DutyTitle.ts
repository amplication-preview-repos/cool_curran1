import { Duty as TDuty } from "../api/duty/Duty";

export const DUTY_TITLE_FIELD = "id";

export const DutyTitle = (record: TDuty): string => {
  return record.id?.toString() || String(record.id);
};
