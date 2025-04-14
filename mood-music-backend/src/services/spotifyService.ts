import axios from "axios";
import qs from "qs";
import { SPOTIFY_CLIENT_ID, 
         SPOTIFY_CLIENT_SECRET,
         SPOTIFY_TOKEN_URL
} from "../constants";

// Function to get an access token from Spotify
export async function getSpotifyAccessToken() {
    try { 
        const data = qs.stringify({
            grant_type: "client_credentials",
        });

        const authHeader = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");

        const response = await axios.post(SPOTIFY_TOKEN_URL, data, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": `Basic ${authHeader}`,
            },
          });

          return response.data.access_token;

    } catch (error) {
        console.error("Error fetching Spotify access token:", error);
        throw new Error("Failed to get access token forom Spotify.");
    }
}