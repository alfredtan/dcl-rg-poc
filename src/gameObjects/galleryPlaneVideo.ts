import { GalleryPlane } from "./galleryPlane";
import { Video } from "./video";

export class GalleryPlaneVideo extends GalleryPlane {

  private videoTex: Video;

  constructor(transform: TranformConstructorArgs, videoUrl: string) {
    super(transform);

    this.videoTex = new Video(videoUrl);
    this.addComponentOrReplace(this.videoTex.vidMaterial);

    this.addComponentOrReplace(new OnPointerDown(() => {
      this.videoTex.playing = !this.videoTex.playing;
    }, {
      hoverText: "Play/Pause"
    }));

  }

  public play() {
    this.videoTex.play();
  }

  public pause() {
    this.videoTex.pause();
  }
}
