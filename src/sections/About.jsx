import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import RobotRocket from "../components/RobotRocket.jsx";
import { Suspense } from "react";

function SimpleLoadingText() {
  return (
    <Html center>
        <div className="text-white text-sm whitespace-nowrap">
            Loading 3D model…
        </div>
    </Html>
  )
}

const About = () => {
    return (
        <section className="c-space my-20" id="about">
            <div className="w-full text-white-600">
                <h3 className="head-text">About Me</h3>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={1}/>
                            {/*<spotLight position={[10, 10, 10,]} angle={0.15} penubra={1} />*/}
                            <directionalLight position={[10, 10, 10]} intensity={2} />
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<SimpleLoadingText />}>
                                <RobotRocket position={[0.3, -0.6, -0.2]} rotation={[0.2, 0.2, 0]} scale={1}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            <p>
                                Couldn't resist adding this cute robot waving hello! You can also rotate and zoom in on the robot!
                                I'm currently a Robotics master's student at the University of Bristol.
                                Before this, I studied Computer Science during my Bachelor's and that's where my programming background comes from. Video games was one of the main reasons 
                                I chose programming. 3D graphics fascinated me, and still do, this portfolio website is the outcome of that very fascination.

                                Video game programming brings together mathematics, physics, and computer science. It’s like the culmination of everything I studied throughout the years.
                            </p>    
                            <br></br>
                            <p>
                                So how did I end up in Robotics?
                                Well, over time, I realised I wanted to go beyond just programming virtual worlds, or just software inside a computer. I wanted to build something physical 
                                and get hands-on experience by combining electronics and programming.

                                I got my first microcontroller kit during my undergrad, an ESP32, which I still use to this day. My very first project
                                with it was for a Cloud Computing module, where we had to create a project using Azure IoT. 
                            </p>

                            <br></br>
                            <p>
                                My Master's helped me learn a lot about AI in robotics with most of the course's focus geared towards the programming aspect of robotics which I wasn't totally 
                                a stranger to. I believe the projects I've done so far have a significant impact on my understanding of robotics, systems and programming as a whole. I've tried my 
                                best to describe the major projects I've done so far down below. I'd appreciate it if you go through them!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About