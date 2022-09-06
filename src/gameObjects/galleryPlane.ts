export class GalleryPlane extends Entity {

  // quick fix to remove clicking
  constructor(transform: TranformConstructorArgs, /* exitUrl: string, hoverText: string */) {
    super();

    this.addComponent(new PlaneShape());
    this.addComponent(transform);

    // this.addComponent(new OnPointerDown(() => {
    //   openExternalURL(exitUrl);
    // }, {
    //   hoverText: hoverText
    // }));

    engine.addEntity(this);
  }
}
