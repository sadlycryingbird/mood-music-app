import express from 'express';
import axios from 'axios';
import { getSpotifyAccessToken } from '../services/spotify';

const router = express.Router();

const moodGenreMap: Record<string, string[]> = {
  happy: ['pop', 'dance'],
  sad: ['acoustic', 'sad'],
  angry: ['metal', 'hard-rock'],
  chill: ['lo-fi', 'chill'],
  energetic: ['edm', 'work-out'],
};

export async function getSongsByMood(req: Request, res: Response) {
  const mood = req.params.mood.toLowerCase();
  
  if (!moodGenreMap[mood]) {
    return res.status(400).json({ error: 'Invalid mood'});
  }

  try {
    const accessToken = await getSpotifyAccessToken();
    const genres = moodGenreMap[mood].join(',');

    const response = await axios.get('https://api.spotify.com/v1/recommendations' , {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        seed_genres: genres,
        limit: 10,
      },
    });

  } catch (err) {

  }

}