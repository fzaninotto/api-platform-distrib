import { InputGuesser } from "@api-platform/admin";
import { Stack } from "@mui/material";
import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const BookEdit = () => (
  <Edit warnWhenUnsavedChanges>
    <SimpleForm sx={{ maxWidth: 500 }}>
      <InputGuesser source="title" helperText={false} />
      <InputGuesser source="author" helperText={false} />
      <TextInput
        source="description"
        multiline
        helperText={false}
        validate={[required()]}
      />
      <Stack direction="row" gap={2} width="100%">
        <InputGuesser source="isbn" label="ISBN" helperText={false} />
        <InputGuesser source="publicationDate" helperText={false} />
      </Stack>
    </SimpleForm>
  </Edit>
);
