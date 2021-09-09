const authEndpoint = "https://unsplash.com/oauth/authorize";
const scopes = [
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_likes",
  "write_followers",
  "read_collections",
  "write_collections"
];
export const redirectUri = process.env.REACT_APP_REDIRECT_URI;
export const clientId = process.env.REACT_APP_CLIENT_ID;
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "+"
)}&response_type=code`;
export const tokenEndpoint = "https://unsplash.com/oauth/token";
