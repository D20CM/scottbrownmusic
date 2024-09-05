async function getPhotoUrl({ id }) {
  const access_token = import.meta.env.VITE_ACCESS_TOKEN;

  //   const id = "18038076163827937";

  const url = `https://graph.instagram.com/${id}?fields=media_url,permalink&access_token=${access_token}`;

  const response = await fetch(url);
  console.log("waiting for url");
  // console.log(JSON.stringify(response));
  const photoInfo = await response.json();
  console.log("url is ", photoInfo.media_url);
  return photoInfo;
}

export default getPhotoUrl;
