import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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


const images = [
  {
    original: image12,
    thumbnail: image12,
  },
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
  {
    original: image5,
    thumbnail: image5,
  },
  {
    original: image6,
    thumbnail: image6,
  },
  {
    original: image7,
    thumbnail: image7,
  },
  {
    original: image8,
    thumbnail: image8,
  },
  {
    original: image9,
    thumbnail: image9,
  },
  {
    original: image10,
    thumbnail: image10,
  },
  {
    original: image11,
    thumbnail: image11,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image13,
    thumbnail: image13,
  },
];


const Yoofpage = () => {
    return (
      <div style = {{height:"100vh", width:"100vh"}} >
        <ImageGallery items={images} thumbnailPosition="left" showFullscreenButton={false} showPlayButton={false} 
          showNav={false} showBullets={true} useBrowserFullscreen={true} showThumbnails={true}/>
      </div>
      
    );}
 
export default Yoofpage;

