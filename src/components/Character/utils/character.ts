import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
                
                const name = mesh.name || "";
                console.log(`Mesh: "${name}", Material: "${(mesh.material as any)?.name}", Color: "${(mesh.material as any)?.color?.getHexString()}"`);

                // Handle both single and array materials
                const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
                const newMaterials = materials.map((mat: any) => {
                  if (!mat) return mat;
                  const cloned = mat.clone();
                  cloned.vertexColors = false;
                  
                  const matName = (mat.name || "").toLowerCase();
                  const nameLower = name.toLowerCase();
                  
                  // Determine if this is a skin/face part
                  // The face mesh in Blender exports typically uses "default" material
                  // Skin-related mesh names or Plane patterns for face parts
                  const isSkinMesh = nameLower.includes("face") || 
                    nameLower.includes("head") ||
                    nameLower.includes("ear") ||
                    nameLower.includes("nose") ||
                    nameLower.includes("neck") ||
                    nameLower.includes("hand") ||
                    nameLower.includes("chin") ||
                    nameLower.includes("cheek") ||
                    nameLower.includes("forehead") ||
                    nameLower.includes("lip") ||
                    nameLower.includes("jaw") ||
                    nameLower.includes("skin") ||
                    /^Plane\.(003|004|005|006|007)/.test(name) ||
                    /^Mesh\.002/.test(name);
                  
                  // Clothing / non-skin parts to keep dark
                  const isClothing = nameLower.includes("shirt") ||
                    nameLower.includes("pant") ||
                    nameLower.includes("cloth") ||
                    nameLower.includes("hair") ||
                    nameLower.includes("sleeve") ||
                    nameLower.includes("body") ||
                    nameLower.includes("cube") ||
                    /^Cube/.test(name);
                  
                  const isShoe = nameLower.includes("shoe") || nameLower.includes("sole") ||
                    /^Cylinder\.(005|008)/.test(name);
                  
                  if (isSkinMesh) {
                    // CRITICAL: Remove the texture map so the solid color actually shows
                    cloned.map = null;
                    cloned.color = new THREE.Color(0xb5774e); // Warm brown skin
                    cloned.roughness = 0.6;
                    cloned.needsUpdate = true;
                  } else if (isShoe) {
                    cloned.map = null;
                    cloned.color = new THREE.Color(0xdddddd);
                    cloned.roughness = 0.5;
                    cloned.needsUpdate = true;
                  } else if (isClothing) {
                    cloned.color = new THREE.Color(0x222222);
                    cloned.roughness = 0.8;
                    cloned.needsUpdate = true;
                  } else if (matName === "default") {
                    // For "default" material that didn't match above,
                    // apply skin tone (face is most likely here)
                    cloned.map = null;
                    cloned.color = new THREE.Color(0xb5774e);
                    cloned.roughness = 0.6;
                    cloned.needsUpdate = true;
                  }
                  
                  return cloned;
                });
                
                mesh.material = Array.isArray(mesh.material) ? newMaterials : newMaterials[0];
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
