let myVideoTexture: VideoTexture;
let myMaterial: Material;
let screen: Entity;

type VideoTexList = {
  [key: string]: VideoTexture;
};
let videoTextureList: VideoTexList = {};

export function createMultiVideoTest() {

  // https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-1280x720.mp4
  videoTextureList['1920x1080'] = new VideoTexture(new VideoClip("https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-1920x1080.mp4"));
  videoTextureList['1280x720'] = new VideoTexture(new VideoClip("https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-1280x720.mp4"));
  videoTextureList['720x480'] = new VideoTexture(new VideoClip("https://hogsters.s3.ap-southeast-1.amazonaws.com/hww-720x480.mp4"));



  // 1920x1080
  new Signage("1920x1080", new Transform({
    position: new Vector3(3, 1, 4)
  }));

  new Signage("1280x720", new Transform({
    position: new Vector3(7, 1, 4)
  }));

  new Signage("720x480", new Transform({
    position: new Vector3(11, 1, 4)
  }));



  screen = new Entity();
  screen.addComponent(new PlaneShape());

  // --- showing border
  screen.addComponent(
    new Transform({
      position: new Vector3(8, 1, 13),
      rotation: Quaternion.Euler(0, 180, 0),
      scale: new Vector3(9, 6, 1),
    })
  );

  // myVideoTexture = loadVideo( "hww-1920x1080" );



  // screen.addComponentOrReplace(myMaterial);
  screen.addComponent(
    new OnPointerDown(() => {
      myVideoTexture.playing = !myVideoTexture.playing;
    }, {
      hoverText: "Play/Pause"
    })
  );
  engine.addEntity(screen);
}

function loadVideo(filename: string) {
  // #1
  // myVideoClip = new VideoClip(
  //   // 'videos/SampleVideo_640x360_1mb.mp4'
  //   // 'https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004.mp4'
  //   // "videos/hww-1920x1080.mp4"
  //   // "videos/hww-1280x720.mp4"
  //   "videos/hww-720x480.mp4"
  //   // "videos/SampleVideo_640x360_1mb.mp4"
  //   // "https://hogsters.s3.ap-southeast-1.amazonaws.com/Hogarth_Singapore_Non_TVC_Reel_2022_PR004 - trim2.mp4"
  // );

  // #2
  // myVideoTexture = new VideoTexture(new VideoClip("videos/" + filename + ".mp4"));
  log(filename, ': video texture is ', videoTextureList[filename]);
  myVideoTexture = videoTextureList[filename];
  myVideoTexture.loop = true;
  myVideoTexture.volume = 0;



  // vidTex.play();

  // #3
  myMaterial = new Material();
  myMaterial.albedoTexture = myVideoTexture;
  myMaterial.roughness = 1;
  myMaterial.specularIntensity = 0;
  myMaterial.metallic = 0;

  screen.addComponentOrReplace(myMaterial);

  myVideoTexture.play();


  // return vidTex;
}



class Signage {

  constructor(label: string, transform: TranformConstructorArgs) {

    const text1920 = new Entity();
    text1920.addComponent(new TextShape(label));
    text1920.getComponent(TextShape).fontSize = 4;
    text1920.addComponent(transform);

    const collidor = new Entity();
    collidor.addComponent(new BoxShape());
    collidor.getComponent(BoxShape).isPointerBlocker = false;
    const transform2: Transform = new Transform({
      position: transform.position,
      scale: new Vector3(2, 0.5, 0.5)
    });

    collidor.addComponent(transform2);
    // collidor.getComponent(Transform).scale = new Vector3(3, 1, 1);
    collidor.addComponent(new OnPointerDown(() => {
      loadVideo(label);
    }, {
      hoverText: "Play " + label
    }));
    engine.addEntity(text1920);
    engine.addEntity(collidor);
  }
}