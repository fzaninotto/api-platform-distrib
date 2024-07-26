import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import { BookList } from "./books/BookList";
import { BookEdit } from "./books/BookEdit";
import { ReviewList } from "./reviews/ReviewList";
import { ReviewShow } from "./reviews/ReviewShow";
import { ReviewEdit } from "./reviews/ReviewEdit";
import { BookShow } from "./books/BookShow";

export const App = () => (
  <HydraAdmin entrypoint={window.origin}>
    <ResourceGuesser
      name="books"
      list={BookList}
      show={BookShow}
      edit={BookEdit}
    />
    <ResourceGuesser
      name="reviews"
      list={ReviewList}
      show={ReviewShow}
      edit={ReviewEdit}
    />
  </HydraAdmin>
);
