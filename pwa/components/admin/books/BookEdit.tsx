import { EditGuesser, InputGuesser } from "@api-platform/admin";

export const BookEdit = () => (
  <EditGuesser warnWhenUnsavedChanges>
    <InputGuesser source="isbn" label="ISBN" />
    <InputGuesser source="title" />
    <InputGuesser source="author" />
    <InputGuesser source="description" multiline />
    <InputGuesser source="publicationDate" />
  </EditGuesser>
);
