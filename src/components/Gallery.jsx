import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import getPhotos from "../../getPhotos";

const queryClient = new QueryClient();

function Gallery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Photos />
    </QueryClientProvider>
  );
}

function Photos() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: () => getPhotos(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(Object.keys(data.data[0]));
  return (
    <div>
      <h1>{data.data[0].id}</h1>

      {data.data.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}

      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default Gallery;
