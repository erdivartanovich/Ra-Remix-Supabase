import { Datagrid, DateField, List, TextField } from "react-admin";

export const SpuList = () => (
  <List title={"Standard Product Unit (SPU)"}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="producer_type" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);
