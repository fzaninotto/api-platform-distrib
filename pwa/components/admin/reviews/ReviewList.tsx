import { ListGuesser, FieldGuesser } from "@api-platform/admin";

export const ReviewList = () => (
  <ListGuesser sort={{ field: "publicationDate", order: "DESC" }}>
    <FieldGuesser source="author" />
    <FieldGuesser source="book" />
    <FieldGuesser source="rating" />
    <FieldGuesser source="publicationDate" />
  </ListGuesser>
);
