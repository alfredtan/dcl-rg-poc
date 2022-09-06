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
    new GLTFShape("models/NavyMeta7.glb"),
    // new GLTFShape("models/hww_base_07.glb"),
    new Transform({
      position: new Vector3(8, 0, 8),
      rotation: Quaternion.Euler(0, 180, 0),
    })
  );

  // add npc
  const npc = new HwwNPC();


  // add lobby screen
  const screenLobby = new GalleryPlaneVideo(
    new Transform({
      position: new Vector3(3.33, 2.18, 8.87),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2.6, 1.5, 1),
    }),
    // "https://hogsters.s3.ap-southeast-1.amazonaws.com/small-sample.mp4"
    "videos/navy.mp4"

  );
  screenLobby.play();

  // colliders
  const rampCollider = new Entity()
  rampCollider.addComponent(new BoxShape())
  rampCollider.addComponent(new Transform({
    position: new Vector3(7.8, .4, 2.6),
    scale: new Vector3(6, .4, 1.4),
    rotation: Quaternion.Euler(-25, 0, 0)
  }))
  rampCollider.getComponent(BoxShape).isPointerBlocker = false

  const floorCollider = new Entity()
  floorCollider.addComponent(new BoxShape())
  floorCollider.addComponent(new Transform({
    position: new Vector3(8, .7, 8),
    scale: new Vector3(10, .4, 10),
    rotation: Quaternion.Euler(0, 0, 0)
  }))
  floorCollider.getComponent(BoxShape).isPointerBlocker = false

  engine.addEntity(rampCollider)
  engine.addEntity(floorCollider)

}
