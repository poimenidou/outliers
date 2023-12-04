import React from "react"; 
import { Gallery } from "react-grid-gallery";

import image1 from '../images-yoof/image1.jpeg'

const images = [
   {
      src: image1,
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      src: image1,
      width: 320,
      height: 212,
      tags: [
         { value: "Ocean", title: "Ocean" },
         { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: image1,
      width: 320,
      height: 212,
   },
];

const Drawingspage = () => {
    const [open, setOpen] = React.useState(false);
    return ( 
        // <h1>YO</h1>
        <Gallery images={images} />

     );
}
 
export default Drawingspage;