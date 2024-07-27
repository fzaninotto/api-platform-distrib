import { InputGuesser } from "@api-platform/admin";
import {
  useInput,
  AutocompleteInput,
  DateField,
  Edit,
  Labeled,
  SimpleForm,
  TextInput,
  ReferenceInput,
  required,
} from "react-admin";
import { Rating } from "@mui/material";

const RatingInput = () => {
  const { field } = useInput({
    source: "rating",
    parse: (v) => parseInt(v, 10),
  });
  return <Rating {...field} />;
};

export const ReviewEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 500 }}>
      <InputGuesser source="author" helperText={false} />
      <ReferenceInput source="book" reference="books">
        <AutocompleteInput
          validate={[required()]}
          helperText={false}
          filterToQuery={(searchText) => ({ title: searchText })}
        />
      </ReferenceInput>
      <Labeled label="Rating" sx={{ my: 1, ml: 1 }}>
        <RatingInput />
      </Labeled>
      <TextInput
        source="body"
        multiline
        helperText={false}
        validate={[required()]}
      />
      <Labeled label="Publication date" sx={{ my: 1, ml: 1 }}>
        <DateField source="publicationDate" showTime />
      </Labeled>
    </SimpleForm>
  </Edit>
);
