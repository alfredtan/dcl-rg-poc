import { GalleryPlane } from "./galleryPlane";

export class GalleryPlaneImage extends GalleryPlane {

  constructor(transform: TranformConstructorArgs, imageUrl: string) {
    super(transform);

    const imgTex = new Texture(imageUrl);
    const imgMat = new Material();
    imgMat.albedoTexture = imgTex;

    this.addComponentOrReplace(imgMat);

  }
}
