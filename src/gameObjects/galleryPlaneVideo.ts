import * as utils from "@dcl/ecs-scene-utils";
import { GalleryPlane } from "./galleryPlane";
import { Video } from "./video";


export class GalleryPlaneVideo extends GalleryPlane {

  private videoTex: Video;

  // quick fix to disable clicking
  constructor(transform: TranformConstructorArgs, videoUrl: string /*, exitUrl: string, hoverText: string */) {
    super(transform/* , exitUrl, hoverText */);

    this.videoTex = new Video(videoUrl);
    this.addComponentOrReplace(this.videoTex.vidMaterial);

    // this.addComponentOrReplace(new OnPointerDown(() => {
    //   this.videoTex.playing = !this.videoTex.playing;
    // }, {
    //   hoverText: "Play/Pause"
    // }));

  }

  public play() {
    this.videoTex.play();
  }

  public pause() {
    this.videoTex.pause();
  }
}
