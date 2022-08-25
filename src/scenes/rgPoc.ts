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
    new GLTFShape("models/hww_base_10_alternate9_edit.glb"),
    // new GLTFShape("models/hww_base_07.glb"),
    new Transform({ position: new Vector3(8, 0, 8), rotation: Quaternion.Euler(0, 180, 0) })
  );


  // // // add the lifts;
  const lift_1 = new StandardEntity(
    new GLTFShape("models/lift_1_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8), rotation: Quaternion.Euler(0, 180, 0) })
  );
  const lift_2 = new StandardEntity(
    new GLTFShape("models/lift_2_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8), rotation: Quaternion.Euler(0, 180, 0) })
  );
  const lift_3 = new StandardEntity(
    new GLTFShape("models/lift_3_no_mat.glb"),
    new Transform({ position: new Vector3(8, 0, 8), rotation: Quaternion.Euler(0, 180, 0) })
  );




  // // setup the rotating mannequin
  const mann = new StandardEntity(
    new GLTFShape("models/mannequin_coord000.glb"),
    new Transform({ position: new Vector3(8.1, 3.3, 12) })
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

  // add lobby screen
  const screenLobby = new GalleryPlaneVideo(
    new Transform({
      position: new Vector3(7.8, 3.55, .85),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(5.7, 2.7, 1),
    }),
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/tmf-720x480.mp4",
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/tmf-720x480.mp4",
    "Watch video"

  );
  screenLobby.play();

  // level 2 screen - left
  const screen2_1 = new GalleryPlaneImage(

    // PORTRAIT rotation
    // new Transform({
    //   position: new Vector3(14.27, 9.6, 13.4),
    //   rotation: Quaternion.Euler(0, 60, 0),
    //   scale: new Vector3(1.55, 2.5, 1),
    // }),

    // LANDSCAPE
    new Transform({
      position: new Vector3(14.27, 9.6, 13.4),
      rotation: Quaternion.Euler(0, 60, 180),
      scale: new Vector3(2.5, 1.45, 1),
    }),
    "images/volvo.png",
    "https://youtu.be/TBAGP4SYbu4",
    "Watch video"
  );

  // level 2 screen - center
  const screen2_2 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(14.15, 9.5709, 9.55),
      rotation: Quaternion.Euler(180, 300, 0),
      scale: new Vector3(4.8, 2.65, 1),
      // scale: new Vector3(1.9, 1.4, 1),
    }),
    "images/away-day.png",
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/hogarth-away-day-1920x1080.mp4",
    "Watch video"

  );
  // const screen2_2 = new GalleryPlaneVideo(
  //   new Transform({
  //     position: new Vector3(14.15, 9.5709, 9.55),
  //     rotation: Quaternion.Euler(0, 300, 0),
  //     scale: new Vector3(4.8, 2.65, 1),
  //     // scale: new Vector3(1.9, 1.4, 1),
  //   }),
  //   "https://hogsters.s3.ap-southeast-1.amazonaws.com/fathers-day-720x480.mp4",
  //   "https://www.youtube.com/watch?v=70kfeTYi5QA"
  // );

  // screen2_2.play();

  // level 2 screen - right
  const screen2_3 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(10.69, 9.6964, 7.52),
      rotation: Quaternion.Euler(180, 0, 0),
      scale: new Vector3(1.55, 1.3, 1),
    }),
    "images/verdant.png",
    "https://hogsters.s3.ap-southeast-1.amazonaws.com/verdant.mp4",
    "Watch video"
  );

  // level 3 screen
  const screen3_1 = new GalleryPlaneImage(
    new Transform({
      position: new Vector3(8.81814, 15.514, 3.2558),
      rotation: Quaternion.Euler(180, 0, 0),
      scale: new Vector3(6.56, 2.66, 1),
    }),
    "images/screen3-iori.png",
    "https://iori-labs.io/",
    "Visit website"

  );

}
