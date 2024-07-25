import { ListGuesser, FieldGuesser } from "@api-platform/admin";

export const BookList = () => (
  <ListGuesser sort={{ field: "title", order: "ASC" }}>
    <FieldGuesser source="isbn" label="ISBN" />
    <FieldGuesser source="title" />
    <FieldGuesser source="author" />
    <FieldGuesser source="publicationDate" />
    <FieldGuesser source="reviews" />
  </ListGuesser>
);
