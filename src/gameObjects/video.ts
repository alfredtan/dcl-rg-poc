

export class Video extends VideoTexture {

  public vidMaterial: Material;

  constructor(url: string) {

    super(new VideoClip(url));

    this.loop = true;
    this.volume = 0;

    this.vidMaterial = new Material();
    this.vidMaterial.albedoTexture = this;
    this.vidMaterial.roughness = 1;
    this.vidMaterial.specularIntensity = 0;
    this.vidMaterial.metallic = 0;
  }


}