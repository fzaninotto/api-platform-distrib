import { FieldGuesser } from "@api-platform/admin";
import { List, Datagrid, NumberField } from "react-admin";

export const BookList = () => (
  <List sort={{ field: "title", order: "ASC" }}>
    <Datagrid>
      <FieldGuesser source="title" />
      <FieldGuesser source="isbn" label="ISBN" />
      <FieldGuesser source="author" />
      <FieldGuesser source="publicationDate" />
      <NumberField source="reviews.length" label="Reviews" />
    </Datagrid>
  </List>
);
