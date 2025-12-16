// de aici apelam fast api ca sa luam albumele si sa le afisam in carduri, in fiecare zi random

import { Box } from "@mui/material";

const ALBUM_IMAGES = [
    "https://i.scdn.co/image/ab67616d0000b273daec894c14c0ca42d76eeb32",
    "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
    "https://f4.bcbits.com/img/a1162704109_16.jpg",
    "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9",
    "https://cdn-images.dzcdn.net/images/cover/7037869230e2fbf86b91ec1b4c7e8b8d/0x1900-000000-80-0-0.jpg",
    "https://i.scdn.co/image/ab67616d0000b273e31a279d267f3b3d8912e6f1",
    "https://media.pitchfork.com/photos/5d406feb7943ca0008c15144/master/pass/jaduheart_meltaway.jpg",
    "https://i.scdn.co/image/ab67616d0000b2732090f4f6cc406e6d3c306733",
    "https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg",
    "https://upload.wikimedia.org/wikipedia/en/5/50/Brakence_-_Hypochondriac.jpg",
    "https://upload.wikimedia.org/wikipedia/en/9/96/The_Weeknd_-_Trilogy.png",
    "https://i.scdn.co/image/ab67616d0000b273090b1f9557a6d23c0817bd88",
    "https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8",
    "https://i.scdn.co/image/ab67616d0000b2739a8fce763b8a58d7d3e4a7f2",
  ];


  
function AlbumCards() {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '9px',
            padding: '200px',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            justifyContent: 'center',
          }}>
            {Array.from({ length: 14 }).map((_, i) => (
        <Box key={i} sx={{
            aspectRatio: '1/1',
            borderRadius: '8px',
            backgroundColor: '#282828',
            backgroundImage: `url(${ALBUM_IMAGES[i % ALBUM_IMAGES.length]})`,
            backgroundSize: 'cover'
        }} />
    ))}
</Box>


    );
};

export default AlbumCards;