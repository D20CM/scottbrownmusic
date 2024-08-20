async function getPhotos() {
  const access_token = import.meta.env.VITE_ACCESS_TOKEN;
  const user_id = import.meta.env.VITE_USER_ID;

  console.log(access_token);

  const url = `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`;

  const response = await fetch(url);
  return await response.json();
}

export default getPhotos;
