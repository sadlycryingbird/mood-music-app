import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000; 
export const APP_NAME = process.env.APP_NAME || "Default App"; 
export const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID ?? "";
export const SPOTIFY_CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET ?? "";
export const SPOTIFY_TOKEN_URL: string = process.env.SPOTIFY_TOKEN_URL ?? "";
