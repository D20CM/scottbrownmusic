async function getPhotoIds() {
  const access_token = import.meta.env.VITE_ACCESS_TOKEN;
  const user_id = import.meta.env.VITE_USER_ID;

  const url = `https://graph.instagram.com/${user_id}/media?access_token=${access_token}`;

  console.log(url);

  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return await data;
}

export default getPhotoIds;
