export class GalleryPlane extends Entity {
  constructor(transform: TranformConstructorArgs, exitUrl: string) {
    super();

    this.addComponent(new PlaneShape());
    this.addComponent(transform);

    this.addComponent(new OnPointerDown(() => {
      openExternalURL(exitUrl);
    }, {
      hoverText: "Visit website"
    }));

    engine.addEntity(this);
  }
}
