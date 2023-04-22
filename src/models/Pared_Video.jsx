import React, {useState, useRef, useEffect, Suspense   } from 'react';
import { Plane } from '@react-three/drei';
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'

export function Pared_Imagen() {
  const size = useAspect(1800, 1000)
  const texture1 = useVideoTexture("Videos/musica.mp4")


    return (
      <group>
        <Plane args={[5, 3]}  rotation={[-Math.PI / 50.9, 0, 0]}
        position={[0, 1.5, -2]} color="#fafafa" >
        <Suspense fallback={ <meshBasicMaterial map={texture1} toneMapped={false} />}>
          <meshBasicMaterial map={texture1} toneMapped={false} />
        </Suspense></Plane>
        
      </group>
      );
}
export default Pared_Imagen;