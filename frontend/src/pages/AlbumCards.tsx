// de aici apelam fast api ca sa luam albumele si sa le afisam in carduri, in fiecare zi random
import React from 'react';
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
    "https://miro.medium.com/v2/resize:fit:1400/0*QAKNW658lCIgd57J.jpg",
    "https://i.scdn.co/image/ab67616d0000b273090b1f9557a6d23c0817bd88",
    "https://i.scdn.co/image/ab67616d00001e0256ac7b86e090f307e218e9c8",
    "https://i.scdn.co/image/ab67616d0000b2739a8fce763b8a58d7d3e4a7f2",
  ];

  const ALBUM_IMAGES_2022 = [
    "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Weeknd_-_Dawn_FM.png",
    "https://www.kolibrimusic.com/wp-content/uploads/2017/09/beerbongs-and-bentleys-2.jpg",
    "https://i.scdn.co/image/ab67616d0000b273c9812d1d2805320e2cb9d481",
    "https://lh3.googleusercontent.com/noCBs-9UvhDSGTylZ_oLakHX-4YyPGKyB6fbWC9ePZY4NAJMmP2hqDtKZX4eKghHlz3neHuwdeJMjUo=w544-h544-l90-rj",
    "https://propermusic.com/cdn/shop/products/5052442015932.jpg?v=1677126782&width=1024",
    "https://media.pitchfork.com/photos/5f6ce4750b3ce3287e37a7d2/1:1/w_3000,h_3000,c_limit/hyper%20romance_jadu%20heart.jpg",
    "https://media.pitchfork.com/photos/623a9d636597466fa9d6e2ba/master/pass/beabadoobee-Beatopia.jpg",
    "https://i.scdn.co/image/ab67616d0000b273ee72c43250d377ee9a3de52e",
    "https://i.scdn.co/image/ab67616d0000b273539aa9de441d386859c5d181",
    "https://s13emagst.akamaized.net/products/5013/5012141/images/res_23a1b441074e6522bf3bd47f2ec4ebb9.jpg?width=720&height=720&hash=0EFAA0B090F95124A8AEC53D6D053D8E",
    "https://i.scdn.co/image/ab67616d0000b27305f6e7e2395e3c6c06b09348",
    "https://i.scdn.co/image/ab67616d0000b273c8ced8a4d6b6b61eb592f3dd",
    "https://i.scdn.co/image/ab67616d0000b273eb88e3c32c3bb61e318695b3",
    "https://i.scdn.co/image/ab67616d0000b27356d752884e12cc2d2faf526d",
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
            backgroundImage: `url(${ALBUM_IMAGES[i % ALBUM_IMAGES_2022.length]})`,
            backgroundSize: 'cover'
        }} />
    ))}
</Box>


    );
};

export default AlbumCards;