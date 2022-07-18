import * as utils from "@dcl/ecs-scene-utils";
import { Floor } from "../gameObjects/floor";
import { StandardEntity } from "../gameObjects/standardEntity";
import { HwwNPC } from "../gameObjects/hwwNpc";
import { GalleryPlane } from "src/gameObjects/galleryPlane";

export function createRgPoc() {
  // add floor
  const floor = new Floor(); //

  // add base
  // const scene = new StandardEntity(
  //   new GLTFShape("models/hww_base_bare.glb"),
  //   // new GLTFShape("models/hww_screens.glb"),
  //   new Transform({ position: new Vector3(8, 0, 8) })
  // );

  // add the lifts
  const lift_1 = new StandardEntity(
    new GLTFShape("models/Lift_1.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );
  const lift_2 = new StandardEntity(
    new GLTFShape("models/Lift_2.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );
  const lift_3 = new StandardEntity(
    new GLTFShape("models/Lift_3.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );

  // setup the rotating mannequin
  const mann = new StandardEntity(
    new GLTFShape("models/hww_mannequin_coord000.glb"),
    new Transform({ position: new Vector3(7.9, 3.3, 4) })
  );
  mann.addComponent(
    new utils.KeepRotatingComponent(Quaternion.Euler(0, 30, 0))
  );

  // add npc
  const npc = new HwwNPC();

  const screens_ref = new StandardEntity(
    // new GLTFShape("models/hww_base_bare.glb"),
    new GLTFShape("models/hww_screens.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );

  // add screen
  const screenLobby = new GalleryPlane(
    new Transform({
      position: new Vector3(8.2, 3.55, 15.15),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(5.7, 2.7, 1),
    })
  );

  const screen2_1 = new GalleryPlane(
    new Transform({
      position: new Vector3(1.735, 9.6, 2.6076),
      rotation: Quaternion.Euler(0, 60, 0),
      scale: new Vector3(1.55, 2.5, 1),
    })
  );

  const screen2_2 = new GalleryPlane(
    new Transform({
      position: new Vector3(1.7828, 9.7145, 6.4615),
      rotation: Quaternion.Euler(0, 120, 0),
      scale: new Vector3(1.7, 1.2, 1),
    })
  );

  const screen2_3 = new GalleryPlane(
    new Transform({
      position: new Vector3(5.3227, 9.6964, 8.47501),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(1.7, 1.2, 1),
    })
  );

  const screen3_1 = new GalleryPlane(
    new Transform({
      position: new Vector3(7.18434, 15.514, 12.726),
      rotation: Quaternion.Euler(0, 0, 0),
      scale: new Vector3(6.5, 2.5, 1),
    })
  );

  // temp mat for screen
  const mat = new Material();
  mat.albedoColor = Color3.Red();
  // screenLobby.addComponent(mat);
  // screen2_1.addComponent(mat);
  // screen2_2.addComponent(mat);
  // screen2_3.addComponent(mat);
  // screen3_1.addComponent(mat);

  // #1
  const myVideoClip = new VideoClip(
    // 'videos/SampleVideo_640x360_1mb.mp4'
    // 'https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004.mp4'
    "videos/hww-trim2.mp4"
    // "https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004 - trim2.mp4"
  );

  // #2
  const myVideoTexture = new VideoTexture(myVideoClip);
  myVideoTexture.loop = true;
  myVideoTexture.volume = 0;
  myVideoTexture.play();

  // #3
  const myMaterial = new Material();
  myMaterial.albedoTexture = myVideoTexture;
  myMaterial.roughness = 1;
  myMaterial.specularIntensity = 0;
  myMaterial.metallic = 0;

  screenLobby.addComponent(myMaterial);
  screen2_1.addComponent(myMaterial);
  screen2_2.addComponent(myMaterial);
  screen2_3.addComponent(myMaterial);
  screen3_1.addComponent(myMaterial);

  // //screens
  // const screens = new StandardEntity(
  //   new GLTFShape("models/hww_screens.glb"),
  //   new Transform()
  // );
}
