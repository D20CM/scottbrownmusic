import PhotoTile from "./PhotoTile";

import css from "./gallery.module.css";
import photoCollection from "../assets/img_library";

function Gallery() {
  return (
    <div className={css.galleryContainer}>
      <h2>Gallery</h2>
      <div className={css.photogrid}>
        {photoCollection.map((item, index) => (
          <div key={index}>
            <PhotoTile url={item} className={css.phototile} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
