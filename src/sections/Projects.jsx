import {Canvas} from "@react-three/fiber";
import { Center, Html } from "@react-three/drei";
import {myProjects, myProjects1, myProjects2} from "../constants/index.js";
import {Suspense, useState} from "react";
import Monitor from "../components/Monitor.jsx";
import Monitor2 from "../components/Monitor2.jsx";
import Monitor3 from "../components/Monitor3.jsx";
import Nes from "../components/Nes.jsx"
import {OrbitControls} from "@react-three/drei";

function SimpleLoadingText() {
  return (
    <Html center>
        <div className="text-white text-sm whitespace-nowrap">
            Loading 3D model…
        </div>
    </Html>
  )
}

const projectCount = myProjects.length;

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const [selectedProjectIndex1, setSelectedProjectIndex1] = useState(0);

    const [selectedProjectIndex2, setSelectedProjectIndex2] = useState(0);

    const handleNavigation = (direction, section) => {
        if (section === 'first') {
            setSelectedProjectIndex((prevIndex) => {
                if (direction === 'previous') {
                    return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
                } else {
                    return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
                }
            });
        } else if (section === 'second') {
            setSelectedProjectIndex1((prevIndex) => {
                if (direction === 'previous') {
                    return prevIndex === 0 ? myProjects1.length - 1 : prevIndex - 1;
                } else {
                    return prevIndex === myProjects1.length - 1 ? 0 : prevIndex + 1;
                }
            });
        } else if (section === 'third') {
            setSelectedProjectIndex2((prevIndex) => {
                if (direction === 'previous') {
                    return prevIndex === 0 ? myProjects2.length - 1 : prevIndex - 1;
                } else {
                    return prevIndex === myProjects2.length - 1 ? 0 : prevIndex + 1;
                }
            });
        }
    };

    const currentProject = myProjects[selectedProjectIndex];

    const currentProject1 = myProjects1[selectedProjectIndex1];

    const currentProject2 = myProjects2[selectedProjectIndex2];

    return (
        <section className="c-space my-20" id="projects">
            <p className="head-text">My Projects</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-1 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-12 h-12 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        {/* <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Paper Link</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a> */}
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous', 'first')}>
                            <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next', 'first')}>
                            <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={5} />
                        <directionalLight position={[0, 5, 0]} intensity={5}/>
                        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<SimpleLoadingText />}>
                            <group scale={4.55} position={[0, -2, 0]}>
                                <Monitor texture={currentProject.texture} />
                            </group>
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject1.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    {/* <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject1.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject1.logo} alt="logo" />
                    </div> */}

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject1.title}</p>

                        <p className="animatedText">{currentProject1.desc}</p>
                        <p className="animatedText">{currentProject1.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject1.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        {/* <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject1.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a> */}
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous', 'second')}>
                            <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next', 'second')}>
                            <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={2} />
                        <directionalLight position={[0, 5, 0]} intensity={5}/>
                        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
                        
                        {selectedProjectIndex1 === 0 ? (
                            <Suspense fallback={<SimpleLoadingText />}>
                                <group scale={12} position={[0.6, 1.3, -1]}>
                                    <Nes rotation={[0.5, -0.3, 0]} />
                                </group>
                            </Suspense>
                        ) : (
                            <Suspense fallback={<SimpleLoadingText />}>
                                <group scale={4.6} position={[0, -2, 0]}>
                                    <Monitor2 texture={currentProject2.texture} />
                                </group>
                            </Suspense>
                        )}

                    </Canvas>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject2.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    {/* <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject2.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject2.logo} alt="logo" />
                    </div> */}

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject2.title}</p>

                        <p className="animatedText">{currentProject2.desc}</p>
                        <p className="animatedText">{currentProject2.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject2.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject2.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Paper Link</p>
                            <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous', 'third')}>
                            <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next', 'third')}>
                            <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={5} />
                        <directionalLight position={[0, 5, 0]} intensity={5}/>
                        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<SimpleLoadingText />}>
                            <group scale={4.6} position={[0, -2, 0]}>
                                <Monitor3 texture={currentProject2.texture} />
                            </group>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;