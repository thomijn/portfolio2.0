
import React from "react";
import Lights from './Lights';
import Terrain from "./Terrain";
import { Dom, useFrame } from "react-three-fiber";
import { Button } from "@material-ui/core";
import { useStore } from "../../store";

function Dolly({ rotate, zoom }) {
    const { page } = useStore()
    console.log(page)
    useFrame(({ camera }) => {
        if(page === 'about'){
            // camera.position.x = camera.position.x += (3- camera.position.x) * 0.04
            // camera.position.z = camera.position.z += (- camera.position.z) * 0.04
            camera.rotation.y = camera.rotation.y += (0.06 - camera.rotation.y) * 0.04
            camera.position.x = camera.position.x += (3 - camera.position.x) * 0.04
        }
    
      camera.updateProjectionMatrix()
    })
    return null
  }

const Scene = ({ mouse }) => {

    return (
        <>
            <Lights mouse={mouse} />
            <Terrain />
            <Dolly/>
        </>
    )
}

export default Scene;