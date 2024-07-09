const express = require('express');
const poji_ytmp3 = require('youtube-to-mp3-poji');

const app = express();
const port = 3000;

app.get('/music', async (req, res) => {
  const youtubeUrl = req.query.url;

  if (!youtubeUrl) {
    return res.status(400).send({ error: 'You must provide a YouTube URL.' });
  }

  try {
    const data = await poji_ytmp3(youtubeUrl);
    res.send(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: 'Error occurred during MP3 conversion.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
