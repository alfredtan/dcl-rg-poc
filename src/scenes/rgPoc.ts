import * as utils from "@dcl/ecs-scene-utils";
import { Floor } from "../gameObjects/floor";
import { StandardEntity } from "../gameObjects/standardEntity";
import { HwwNPC } from "../gameObjects/hwwNpc";
import { GalleryPlane } from "src/gameObjects/galleryPlane";
import { GalleryPlaneVideo } from "src/gameObjects/galleryPlaneVideo";
import { GalleryPlaneImage } from "src/gameObjects/galleryPlaneImage";
import { Video } from "src/gameObjects/video";

export function createRgPoc() {
  // // add floor
  const floor = new Floor(); //

  // add base;
  const scene = new StandardEntity(
    // new GLTFShape("models/base_scene.glb"),
    new GLTFShape("models/hww_base_10_alternateV4.glb"),
    // new GLTFShape("models/hww_base_07.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );


  // // // add the lifts;
  const lift_1 = new StandardEntity(
    new GLTFShape("models/lift_1_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );
  const lift_2 = new StandardEntity(
    new GLTFShape("models/lift_2_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );
  const lift_3 = new StandardEntity(
    new GLTFShape("models/lift_3_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );




  // // setup the rotating mannequin
  const mann = new StandardEntity(
    new GLTFShape("models/mannequin_coord000.glb"),
    new Transform({ position: new Vector3(7.9, 3.3, 4) })
  );
  mann.addComponent(
    new utils.KeepRotatingComponent(Quaternion.Euler(0, 30, 0))
  );

  // add npc
  const npc = new HwwNPC();

  // // const screens_ref = new StandardEntity(
  // //   // new GLTFShape("models/hww_base_bare.glb"),
  // //   new GLTFShape("models/screens_ref.glb"),
  // //   new Transform({ position: new Vector3(8, 0, 8) })
  // // );

  // add screen
  const screenLobby = new GalleryPlaneVideo(
    new Transform({
      position: new Vector3(8.2, 3.55, 15.15),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(5.7, 2.7, 1),
    }),
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/small-sample.mp4",
    "https://youtube.com"


  );
  screenLobby.play();

  const screen2_1 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(1.735, 9.6, 2.6076),
      rotation: Quaternion.Euler(0, 60, 0),
      scale: new Vector3(1.55, 2.5, 1),
    }),
    "images/iori.png",
    "https://google.com"


  );

  const screen2_2 = new GalleryPlaneVideo(
    new Transform({
      position: new Vector3(1.7702, 9.5709, 6.3),
      rotation: Quaternion.Euler(0, 120, 0),
      scale: new Vector3(4.8, 2.65, 1),
      // scale: new Vector3(1.9, 1.4, 1),
    }),
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-720x480.mp4",
    "https://youtube.com"
  );

  screen2_2.play();

  const screen2_3 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(5.3227, 9.6964, 8.47501),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(1.55, 1.3, 1),
    }),
    "images/iori.png",
    "https://google.com"


  );

  const screen3_1 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(7.18434, 15.514, 12.6),
      rotation: Quaternion.Euler(180, 180, 0),
      scale: new Vector3(6.56, 2.66, 1),
    }),
    "images/screen3-iori.png",
    "https://iori-labs.io/"

  );

  // temp mat for screen
  // const mat = new Material();
  // mat.albedoColor = Color3.Red();
  // screenLobby.addComponent(mat);
  // screen2_1.addComponent(mat);
  // screen2_2.addComponent(mat);
  // screen2_3.addComponent(mat);
  // screen3_1.addComponent(mat);

  // #1
  // const myVideoClip = new VideoClip(
  //   // 'videos/SampleVideo_640x360_1mb.mp4'
  //   // 'https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004.mp4'
  //   "videos/hww-trim2.mp4"
  //   // "https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004 - trim2.mp4"
  // );

  // #2
  // const myVideoTexture = new VideoTexture(myVideoClip);
  // myVideoTexture.loop = true;
  // myVideoTexture.volume = 0;
  // myVideoTexture.play();

  // #3
  // const myMaterial = new Material();
  // myMaterial.albedoTexture = myVideoTexture;
  // myMaterial.roughness = 1;
  // myMaterial.specularIntensity = 0;
  // myMaterial.metallic = 0;

  // const lobbyVideo: Video = new Video("https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-720x480.mp4");
  // const screen2_2Video: Video = new Video("https://hogsters.s3.ap-southeast-1.amazonaws.com/small-sample.mp4");
  // const screen2_3Video: Video = new Video("https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-720x480.mp4");

  // screenLobby.addComponentOrReplace(lobbyVideo.vidMaterial);
  // screen2_2.addComponentOrReplace(screen2_2Video.vidMaterial);
  // lobbyVideo.play();
  // screen2_2Video.play();


  // screenLobby.addComponent(
  //   new OnPointerDown(() => {
  //     lobbyVideo.playing = !lobbyVideo.playing;
  //   })
  // );

  // screen2_1.addComponent(myMaterial);
  // screen2_2.addComponent(myMaterial);
  // screen2_3.addComponent(myMaterial);
  // screen3_1.addComponent(myMaterial);

  // //screens
  // const screens = new StandardEntity(
  //   new GLTFShape("models/hww_screens.glb"),
  //   new Transform()
  // );
}
