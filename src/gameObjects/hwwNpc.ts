import { Dialog, DialogWindow } from "@dcl/npc-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";


export class HwwNPC extends Entity {

  constructor() {
    super();

    // setup a blank entity to hold the npc and a collidor
    // TODO - try setting withCollision on the glb
    // const npc_container = new Entity();
    this.addComponent(
      new Transform({
        position: new Vector3(11, 1, 12.5),
        // position: new Vector3(5, 1.7, 7.5),
        rotation: Quaternion.Euler(0, 220, 0),
        scale: new Vector3(1, 1, 1),
      })
    );

    // the actual NPC model
    const npc = new Entity();
    npc.addComponent(new GLTFShape("models/Navy_Soldier_Salute.glb"));
    // npc.addComponent(new GLTFShape("models/mannequin_coord000.glb"));
    npc.setParent(this);

    engine.addEntity(this);
  }
}
