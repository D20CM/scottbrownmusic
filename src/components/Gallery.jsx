import {
  useQuery,
  useQueries,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import getPhotoIds from "../../getPhotoIds";
import PhotoTile from "./PhotoTile";
import getPhotoUrl from "../getPhotoUrl";
import css from "./gallery.module.css";

const queryClient = new QueryClient();

function Gallery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Photos />
    </QueryClientProvider>
  );
}

function Photos() {
  const { data: photoIds } = useQuery({
    queryKey: ["photoIds"],
    queryFn: () => getPhotoIds(),
    select: (photoIds) => photoIds.data.map((photo) => photo.id),
  });

  photoIds && console.log(photoIds);

  const photoUrls = useQueries({
    queries: photoIds
      ? photoIds.map((id) => {
          return {
            queryKey: ["photoURLs", id],
            queryFn: () => getPhotoUrl((id = { id })),
            enabled: !!photoIds,
          };
        })
      : [],
  });

  if (photoUrls.some((query) => query.isLoading)) {
    return <p>Loading photos...</p>;
  }

  if (photoUrls.some((query) => query.isError)) {
    return <p>An error has occurred while fetching photos.</p>;
  }

  return (
    <div className={css.galleryContainer}>
      <h2>Gallery</h2>
      <div className={css.photogrid}>
        {photoUrls.map((item, index) => (
          <div key={index}>
            {/* <p>{JSON.stringify(item)}</p> */}
            <PhotoTile url={item.data.media_url} className={css.phototile} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
