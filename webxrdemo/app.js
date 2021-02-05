// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-4.4436, 1.54, -3.00392);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// dit is het stuk die we erin moesten zettten________________________________
// de cube room model
const kamer = new Model('assets/models/cube-room/cube-room.gltf');
kamer.setPosition(-2.50535, 0.91001, -3.21484);
kamer.setScale(0.33668, 0.44443, 0.16213);
kamer.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);



// ADD TEKST EN TEXT KLEUR 
// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(-2.71298 , 0 ,-1.06422);
testText.setFontsize(10);
testText.setColor('red');

// voegt een image toe
const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition(1.1883, 0.88128 ,-1.87092);


// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 2.45839, -5);


// add sky_______________________
// create a 360 image
const image360 = new Sky('assets/images/FolkertdeJong.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));