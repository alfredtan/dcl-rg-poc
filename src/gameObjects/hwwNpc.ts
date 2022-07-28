import { Dialog, DialogWindow } from "@dcl/npc-scene-utils";
import { movePlayerTo } from "@decentraland/RestrictedActions";

const welcomeDialog: Dialog[] = [
  {
    text: "Hi, welcome to the Hogarth Metaverse APAC Office!<br>We're the world's largest creative production company and we're so glad you dropped by for a visit!",
    fontSize: 22
  },
  {
    text: "On this level on the screen behind you is our video of our Metaverse Foundry, a service that helps brands get on the Metaverse at scale!",
    fontSize: 22,
  },
  {
    text: "Would you like to know more about us?",
    fontSize: 22,
    isQuestion: true,
    buttons: [
      { label: 'Yes', goToDialog: "dialogYes1" },
      { label: 'No', goToDialog: "dialogNo1" },
    ]
  },
  {
    name: "dialogYes1",
    fontSize: 22,
    text: "Great! There are 2 more exciting levels to find out more about what we do.",
  },
  {
    name: "dialogYes2",
    fontSize: 22,
    text: "On Level 2 there's a showcase of the projects we've done in the metaverse space.",

  },
  {
    name: "dialogYes3",
    fontSize: 22,
    text: "On Level 3, we've got our IORI collection, a special series of NFTs for visitors to mint! Just take the lifts to look!",
    isQuestion: true,
    buttons: [
      {
        label: 'Level 2', goToDialog: "final", triggeredActions: () => {
          movePlayerTo({ x: 6, y: 9, z: 5 });
        }
      },
      {
        label: 'Level 3', goToDialog: "final", triggeredActions: () => {
          movePlayerTo({ x: 6.75, y: 15, z: 3.5 });
        }
      },
      { label: 'No, thanks', goToDialog: "dialogNo1" }
    ]
  },
  {
    name: "dialogNo1",
    fontSize: 22,
    text: "Sure! Please feel free to browse around at your own time and find out more about us! I'm here if you need help.",
    isEndOfDialog: true
  },
  {
    name: "final",
    fontSize: 22,
    text: "Have fun exploring!",
    isEndOfDialog: true
  },
  // {
  //   name: "dialogYes",
  //   text: "Great! There are 2 more exciting levels to find out more about what we do. On Level 2 there's a showcase of the projects we've done in the metaverse space. On Level 3, we've got our IORI collection, a special series of NFTs for visitors to mint! Just take the lifts to look!",
  //   isQuestion: true,
  //   buttons: [
  //     { label: 'Go to Level 2', goToDialog: "dialogYes" },
  //     { label: 'Go to Level 3', goToDialog: "dialogNo" },
  //     { label: 'No, thanks', goToDialog: "dialogNo" }
  //   ]
  // },
  // {
  //   name: "dialogYes",
  //   text: "Great! There are 2 more exciting levels to find out more about what we do. On Level 2 there's a showcase of the projects we've done in the metaverse space. On Level 3, we've got our IORI collection, a special series of NFTs for visitors to mint! Just take the lifts to look!",
  //   isQuestion: true,
  //   buttons: [
  //     { label: 'Go to Level 2', goToDialog: "dialogYes" },
  //     { label: 'Go to Level 3', goToDialog: "dialogNo" },
  //     { label: 'No, thanks', goToDialog: "dialogNo" }
  //   ]
  // },
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
        position: new Vector3(11, 1.7, 8.4),
        // position: new Vector3(5, 1.7, 7.5),
        rotation: Quaternion.Euler(0, -120, 0),
        scale: new Vector3(1.4, 1.4, 1.4),
      })
    );

    // the actual NPC model
    const npc = new Entity();
    npc.addComponent(new GLTFShape("models/npc_robot.glb"));
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
          // dialogWindow.closeDialogWindow();
          // this.isNpcChatting = false;
        }
      })
    );

    engine.addEntity(this);
  }
}
