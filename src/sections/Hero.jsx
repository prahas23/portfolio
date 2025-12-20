import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, useProgress, Html} from "@react-three/drei";
import {Suspense} from "react";
import RobotArm from "../components/RobotArm.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from '../components/Button.jsx';

function SimpleLoadingText() {
  return (
    <Html center>
        <div className="text-white text-sm whitespace-nowrap">
            Loading 3D model…
        </div>
    </Html>
  )
}

const Hero = () => {

   // const controls = useControls('RobotArm',
   //  {
   //      positionX: {
   //          value: 2.5,
   //          min: -10,
   //          max: 10
   //      },
   //      positionY: {
   //          value: 2.5,
   //          min: -10,
   //          max: 10
   //      },
   //      positionZ: {
   //          value: 2.5,
   //          min: -10,
   //          max: 10
   //      },
   //      rotationX: {
   //          value: 0,
   //          min: -10,
   //          max: 10
   //      },
   //      rotationY: {
   //          value: 0,
   //          min: -10,
   //          max: 10
   //      },
   //      rotationZ: {
   //          value: 0,
   //          min: -10,
   //          max: 10
   //      },
   //      scale: {
   //          value: 0.01,
   //          min: 0.01,
   //          max: 0.02,
   //      },
   //
   //  })

    const isMobile = useMediaQuery( {maxWidth: 768 })

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium
                text-white text-center font-generalsans">Hi, I am Prahas</p>
                <p className="hero_tag text-gray_gradient">
                    A Robotics, Software, and Systems enthusiast
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    

                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <Suspense fallback={<SimpleLoadingText />}>
                        <HeroCamera>
                            <RobotArm
                                // scale={0.01}
                                position={[3, -9, 2.5]}
                                rotation={[0, -2.4, 0]}
                                scale={isMobile ? 0.005 : 0.015}
                            />
                        </HeroCamera>
                    </Suspense>
                    

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={2} />

                    
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="About Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>

        </section>
    )
}

export default Hero