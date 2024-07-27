import { FieldGuesser } from "@api-platform/admin";
import { List, Datagrid, ReferenceField, WithRecord } from "react-admin";
import { Rating } from "@mui/material";

export const ReviewList = () => (
  <List sort={{ field: "publicationDate", order: "DESC" }}>
    <Datagrid>
      <FieldGuesser source="author" />
      <ReferenceField source="book" reference="books" />
      <WithRecord
        label="Rating"
        render={(record) => (
          <Rating value={record.rating} readOnly size="small" />
        )}
      />
      <FieldGuesser source="publicationDate" label="Date" />
    </Datagrid>
  </List>
);
