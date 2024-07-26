import { EditGuesser, InputGuesser } from "@api-platform/admin";
import { Stack } from "@mui/material";

export const BookEdit = () => (
  <EditGuesser warnWhenUnsavedChanges>
    <InputGuesser source="title" helperText={false} />
    <InputGuesser source="author" helperText={false} />
    <InputGuesser source="description" multiline helperText={false} />
    <Stack direction="row" gap={2}>
      <InputGuesser source="isbn" label="ISBN" helperText={false} />
      <InputGuesser source="publicationDate" helperText={false} />
    </Stack>
  </EditGuesser>
);
