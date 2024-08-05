import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Layout, defaultLightTheme, defaultDarkTheme } from "react-admin";

import { BookList } from "./books/BookList";
import { BookEdit } from "./books/BookEdit";
import { ReviewList } from "./reviews/ReviewList";
import { ReviewShow } from "./reviews/ReviewShow";
import { ReviewEdit } from "./reviews/ReviewEdit";
import { BookShow } from "./books/BookShow";

const App = () => (
  <HydraAdmin
    entrypoint={window.origin}
    layout={Layout}
    theme={defaultLightTheme}
    darkTheme={defaultDarkTheme}
  >
    <ResourceGuesser
      name="books"
      list={BookList}
      show={BookShow}
      edit={BookEdit}
      recordRepresentation="name"
      icon={AutoStoriesIcon}
    />
    <ResourceGuesser
      name="reviews"
      list={ReviewList}
      show={ReviewShow}
      edit={ReviewEdit}
      recordRepresentation="id"
      icon={ReviewsIcon}
    />
  </HydraAdmin>
);

export default App;
