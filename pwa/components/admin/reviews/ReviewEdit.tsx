import { EditGuesser, InputGuesser } from "@api-platform/admin";

export const ReviewEdit = () => (
  <EditGuesser>
    <InputGuesser source="author" />
    <InputGuesser source="book" />
    <InputGuesser source="body" multiline />
    <InputGuesser source="rating" />
    <InputGuesser source="publicationDate" readOnly />
  </EditGuesser>
);
