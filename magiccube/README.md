# Magic Cube - Interactive 3D Experience

An interactive 3D cube featuring different geometric shapes on each face, each rotating in its own unique environment. Built with React Three Fiber and Drei.

## Features

- **Six unique 3D shapes** on each face:
  - Torus
  - Torus Knot
  - Box
  - Octahedron
  - Icosahedron
  - Dodecahedron
- **Portal effects** using MeshPortalMaterial
- **Dynamic lighting** with multiple light sources and shadows
- **Interactive camera** controls
- **Visual enhancements** with colored edges and distinct face colors

## Technologies Used

- @react-three/fiber
- @react-three/drei (German for "three")
- Three.js ( base library )

## Key Points :

- **drei** is a german word for three since the maintainer of poimandres is from german.

- canvas is like a renderer in which there is everything and it a basic entry point and also we should put shadows so that the 3d scene can render shadows.

- `<mesh>` is like a 3d object in canvas which has geometry and material making a full 3d object.
- pivotcontrols is to give a gizmos so that we can control a mesh.
- cameracontrols is same as orbitcontrols but improved as cameracontrols uses another library called camera-controls.

- to make Edges you should give mesh a color otherwise it will not show as meshbasicmaterial and edges color are same
