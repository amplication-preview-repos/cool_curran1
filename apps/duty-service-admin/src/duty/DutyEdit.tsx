import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DutyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="duration" source="duration" />
        <DateTimeInput label="dateTime" source="dateTime" />
      </SimpleForm>
    </Edit>
  );
};
