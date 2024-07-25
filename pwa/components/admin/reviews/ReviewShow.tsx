import { ShowGuesser, FieldGuesser } from "@api-platform/admin";

export const ReviewShow = () => (
  <ShowGuesser>
    <FieldGuesser source="author" />
    <FieldGuesser source="book" />
    <FieldGuesser source="body" />
    <FieldGuesser source="rating" />
    <FieldGuesser source="publicationDate" />
  </ShowGuesser>
);
