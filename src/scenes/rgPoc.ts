import * as utils from "@dcl/ecs-scene-utils";
import { Floor } from "../gameObjects/floor";
import { StandardEntity } from "../gameObjects/standardEntity";
import { HwwNPC } from "../gameObjects/hwwNpc";

export function createRgPoc() {
  // add floor
  const floor = new Floor(); //

  // add base
  const scene = new StandardEntity(
    new GLTFShape("models/hww_base_bare.glb"),
    new Transform({ position: new Vector3(8, 0, 8) })
  );

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
}
