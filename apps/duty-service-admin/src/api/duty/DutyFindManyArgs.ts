import { DutyWhereInput } from "./DutyWhereInput";
import { DutyOrderByInput } from "./DutyOrderByInput";

export type DutyFindManyArgs = {
  where?: DutyWhereInput;
  orderBy?: Array<DutyOrderByInput>;
  skip?: number;
  take?: number;
};
