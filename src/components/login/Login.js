import React from "react";
import "./Login.scss";
import { loginUrl } from "../../app/spotify";
import SpotifyLogo from "../../assets/spotifylogo.jpeg";

function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;