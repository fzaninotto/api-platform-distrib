import {
  Show,
  TabbedShowLayout,
  SimpleShowLayout,
  ReferenceArrayField,
  SimpleList,
  TextField,
  DateField,
} from "react-admin";
import { Rating } from "@mui/material";

export const BookShow = () => (
  <Show>
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="main">
        <TextField source="title" variant="h5" />
        <TextField source="author" variant="body1" />
        <TextField source="description" variant="body1" />
        <SimpleShowLayout direction="row" gap={2} sx={{ p: 0 }}>
          <TextField source="isbn" variant="body1" />
          <DateField source="publicationDate" variant="body1" />
        </SimpleShowLayout>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="reviews">
        <ReferenceArrayField source="reviews" reference="reviews" label={false}>
          <SimpleList
            primaryText="%{body}"
            secondaryText="by %{author} on %{publicationDate}"
            sx={{
              pt: 0,
              "& .MuiListItemButton-root": { p: 0 },
            }}
            leftAvatar={(review) =>
              review.author
                .split(" ")
                .map((name: string) => name[0])
                .join("")
            }
            tertiaryText={(review) => (
              <Rating value={review.rating} readOnly size="small" />
            )}
          />
        </ReferenceArrayField>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
