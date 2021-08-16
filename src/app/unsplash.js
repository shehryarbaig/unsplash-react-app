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
export const redirectUri = "http://localhost:3000/";
export const clientId = "qwznuSGaQSPzh2IvmSQp2ebPs5Yntu6tEt4Gmnk9Et0";
export const clientSecret = "IqHy4qJRkna9Mh1XvFJLxCZAc8wJDMGUENlZaaq4uH0";
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "+"
)}&response_type=code`;
export const tokenEndpoint = "https://unsplash.com/oauth/token";