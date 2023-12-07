import React from "react"; 
import {PhotoAlbum, RenderPhotoProps} from "react-photo-album";


import image1 from '../images-yoof/image1.jpeg'
import image2 from '../images-yoof/image2.jpeg'
import image3 from '../images-yoof/image3.jpeg'
import image4 from '../images-yoof/image4.jpeg'
import image5 from '../images-yoof/image5.jpeg'
import image6 from '../images-yoof/image6.jpeg'
import image7 from '../images-yoof/image7.jpeg'
import image8 from '../images-yoof/image8.jpeg'
import image9 from '../images-yoof/image9.jpeg'
import image10 from '../images-yoof/image10.jpeg'
import image11 from '../images-yoof/image11.jpeg'
import image12 from '../images-yoof/image12.jpeg'
import image13 from '../images-yoof/image13.jpeg'
import image14 from '../images-yoof/image14.jpeg'
import image15 from '../images-yoof/image15.jpeg'
import image16 from '../images-yoof/image16.jpeg'
import image17 from '../images-yoof/image17.jpeg'
import image18 from '../images-yoof/image18.jpeg'
import image19 from '../images-yoof/image19.jpeg'
import image20 from '../images-yoof/image20.jpeg'
import image21 from '../images-yoof/image21.jpeg'
import image22 from '../images-yoof/image22.jpeg'
import image24 from '../images-yoof/image24.jpeg'
import image25 from '../images-yoof/image25.jpeg'
import image26 from '../images-yoof/image26.jpeg'
import image27 from '../images-yoof/image27.jpeg'
import image28 from '../images-yoof/image28.jpeg'
import image29 from '../images-yoof/image29.jpeg'
import image30 from '../images-yoof/image30.jpeg'
import image31 from '../images-yoof/image31.jpeg'

const photos = [
    { src:image1, width: 576, height: 768 },
    { src:image12, width: 1536, height: 2048 },
    { src:image11, width: 343, height: 636 },
    { src:image2, width: 720, height: 960 },
    { src:image3, width: 432, height: 959 },
    { src:image4, width: 1170, height: 1560 },
    { src:image5, width: 704, height: 960 },
    { src:image6, width: 1536, height: 2048 },
    { src:image7, width: 720, height: 960 },
    { src:image8, width: 921, height: 2048 },
    { src:image9, width: 1536, height: 2048 },
    { src:image10, width: 921, height: 2048 },
    { src:image13, width: 1204, height: 1600 },
    { src:image14, width: 3120, height: 4160 },
    { src:image15, width: 4160, height: 3120 },
    { src:image16, width: 4160, height: 3120 },
    { src:image17, width: 3120, height: 4160 },
    { src:image18, width: 3120, height: 4160 },
    { src:image19, width: 3120, height: 4160 },
    { src:image20, width: 3120, height: 4160 },
    { src:image21, width: 3120, height: 4160 },
    { src:image22, width: 3120, height: 4160 },
    { src:image24, width: 3120, height: 4160 },
    { src:image25, width: 3120, height: 4160 },
    { src:image26, width: 3120, height: 4160 },
	  { src:image27, width: 4160, height: 3120 },
    { src:image28, width: 3120, height: 4160 },
    { src:image29, width: 4160, height: 3120 },
    { src:image30, width: 4160, height: 3120 },
    { src:image31, width: 3120, height: 4160 },
];

const Drawingspage = () => {
    const padding = 25;
    const spacing = 35;
    const renderPhoto = React.useCallback(
        ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
          <img
            alt={alt}
            style={{
              ...style,
              borderRadius: padding > 2 ? "4px" : 0,
              boxShadow:
                spacing > 0
                  ? "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)"
                  : "none",
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              backgroundColor: "white"
            }}
            {...rest}
          />
        ),
        [spacing, padding],
      );

    return ( 
      <div style = {{margin: "12rem", paddingTop:"5rem"}}>
        <h5 style={{textAlign: "left", fontSize:"20px"}}> Our little yoof is always here to make our hearts warmer</h5>
        <PhotoAlbum layout="columns" photos={photos} padding={padding} spacing={spacing} renderPhoto={renderPhoto} />
      </div>
        
     );
}
 
export default Drawingspage;