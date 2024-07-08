import { SortOrder } from "../../util/SortOrder";

export type DutyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  dateTime?: SortOrder;
};
