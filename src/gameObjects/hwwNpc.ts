import { Dialog, DialogWindow } from "@dcl/npc-scene-utils";

const welcomeDialog: Dialog[] = [
  {
    text: "Hello! Welcome to Hogarth's Decentraland",
    isEndOfDialog: true,
  },
];

export class HwwNPC extends Entity {
  private isNpcChatting: boolean;

  constructor() {
    super();

    this.isNpcChatting = false;

    // setup a blank entity to hold the npc and a collidor
    // TODO - try setting withCollision on the glb
    // const npc_container = new Entity();
    this.addComponent(
      new Transform({
        position: new Vector3(5, 1.7, 7.5),
        // position: new Vector3(5, 1.7, 7.5),
        rotation: Quaternion.Euler(0, 60, 0),
        scale: new Vector3(1.4, 1.4, 1.4),
      })
    );

    // the actual NPC model
    const npc = new Entity();
    npc.addComponent(new GLTFShape("models/hww_iRobot_stash_animation.glb"));
    npc.setParent(this);

    // the collidor so that we can click on it
    const npc_collidor = new Entity();
    npc_collidor.addComponent(new BoxShape());
    // npc_collidor.addComponent(new Transform({
    //   position: new Vector3(5, 1.7, 7.5),
    //   rotation: Quaternion.Euler(0, 60, 0),
    //   scale: new Vector3(1.4, 1.4, 1.4)
    // }))
    npc_collidor.addComponent(
      new Transform({
        position: new Vector3(0, 1.2, -1),
        scale: new Vector3(0.5, 1.1, 0.5),
      })
    );
    npc_collidor.getComponent(BoxShape).isPointerBlocker = false;
    npc_collidor.setParent(this);
    // npc.addComponent(new Transform({
    //   position: new Vector3(5, 1.7, 7.5),
    //   rotation: Quaternion.Euler(0, 60, 0),
    //   scale: new Vector3(1.4, 1.4, 1.4)
    // }))

    const npc_animator = npc.addComponent(new Animator());
    npc_animator.addClip(new AnimationState("robot_wave"));
    npc_animator.getClip("robot_wave").looping = false;
    npc_animator.getClip("robot_wave").play();

    const dialogWindow = new DialogWindow();

    npc_collidor.addComponent(
      new OnPointerDown(() => {
        if (!dialogWindow.isDialogOpen) this.isNpcChatting = false;

        if (!this.isNpcChatting) {
          npc_animator.getClip("robot_wave").play();
          dialogWindow.openDialogWindow(welcomeDialog, 0);
          this.isNpcChatting = true;
        } else {
          dialogWindow.closeDialogWindow();
          this.isNpcChatting = false;
        }
      })
    );

    engine.addEntity(this);
  }
}
