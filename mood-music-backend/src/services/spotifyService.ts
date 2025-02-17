import axios from "axios";
import qs from "qs";
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_TOKEN_URL } from "../constants";

export async function getSpotifyAccessToken() {
    const data = qs.stringify({
        grant_type: "client_credentials",
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_SECRET,
    });
}