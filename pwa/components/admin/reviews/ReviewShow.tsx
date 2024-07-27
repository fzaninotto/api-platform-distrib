import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import { ReferenceField, TextField, WithRecord } from "react-admin";
import { Rating } from "@mui/material";

export const ReviewShow = () => (
  <ShowGuesser>
    <FieldGuesser source="author" />
    <ReferenceField source="book" reference="books" />
    <WithRecord
      label="Rating"
      render={(record) => (
        <Rating value={record.rating} readOnly size="small" />
      )}
    />
    <TextField source="body" />
    <FieldGuesser source="publicationDate" label="Date" />
  </ShowGuesser>
);
