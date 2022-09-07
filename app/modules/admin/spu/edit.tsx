import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";
import { AppEditToolbar } from "../components/edit-toolbar";
import { RecordTitle } from "../components/record-title";

export const SpuEdit = () => (
  <Edit title={<RecordTitle resourceName="SPU" />}>
    <SimpleForm toolbar={<AppEditToolbar />}>
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="producer_type" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
    </SimpleForm>
  </Edit>
);
