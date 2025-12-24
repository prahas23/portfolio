export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    // {
    //     id: 4,
    //     name: 'Contact',
    //     href: '#contact',
    // },
];

export const myProjects = [
    {
        title: 'Dexterous Humanoid Robot Hand (in progress)...',
        desc: 'Perhaps the most ambitious and complex personal project I\'ve undertaken. ' +
            'The robot arm, as the title suggests, is still a work in progress and is now nearly fully assembled (minus the thumb), with the wrist motors having been fitted recently. '+
            'I\'ve undertaken this project to further my practical knowledge of the concepts I\'ve studied in my masters course.',
        subdesc:
            ' ' +
            '' +
            'Almost every part was 3D printed (except the motors and other metal parts obviously) from the open source STL files and assembled from scratch, which took me ' +
            'a little over four months, which was way over the expected timeline because of the availability of the 3D printers in my University and me trying to juggle this project and my Masters\' course.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: `${import.meta.env.BASE_URL}textures/project/project1.mp4`,
        logo: `${import.meta.env.BASE_URL}assets/arm_logo.png`,
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight1.png`,
        tags: [
            {
                id: 1,
                name: 'Arduino',
                path: `${import.meta.env.BASE_URL}assets/arduino.svg`,
            },
            {
                id: 2,
                name: 'CPlusPlus',
                path: `${import.meta.env.BASE_URL}assets/c++.svg`,
            },
            {
                id: 3,
                name: 'ROS',
                path: `${import.meta.env.BASE_URL}assets/ros.svg`,
            },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Dexterous Humanoid Robot Hand',
        desc: ' ' +
        'Only four motors in the forearm which control the flexion of the phalanges are connected to the microcontroller. The eight servos in the palm section which control the Metacarpophalangeal (MCP) joints of the fingers for the abduction and adduction movements and the remaining '+
        'two servos in the forearm which control the wrist\'s Ulnar deviation, radial deviation, wrist extenstion and flexion movements are still in progress.',
        subdesc:
            'The video shows me moving the fingers and the wrist to give you an idea of what the dexterous movement of the MCP joints and the wrist would look like after being connected to the controller. '+
            'The next section tells you what motors were used, how the connections were done so far and how the rest would be connected. I also talk about the planned future works for this project.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: `${import.meta.env.BASE_URL}textures/project/project1.1.mp4`,
        logo: `${import.meta.env.BASE_URL}assets/arm_logo2.png`,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight2.png`,
        tags: [
            {
                id: 1,
                name: 'Arduino',
                path: `${import.meta.env.BASE_URL}assets/arduino.svg`,
            },
            {
                id: 2,
                name: 'CPlusPlus',
                path: `${import.meta.env.BASE_URL}assets/c++.svg`,
            },
            {
                id: 3,
                name: 'ROS',
                path: `${import.meta.env.BASE_URL}assets/ros.svg`,
            },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Dexterous Humanoid Robot Hand',
        desc: 'A total of fourteen servos were used to build this arm! There are eight EMAX ES3352 servos in the palm section for the MCP joints and four EMAX servos in the ' +
        'forearm to control the flexion and extension of the fingers. Two Feetech SCS2332 servos were used in the forearm for the wrist\'s Radial and Ulnar deviations. '+
        'All the EMAX servos use PWM signals so they\'re connected to the PCA9685 servo driver which is then connected to the Arduino Micro for testing. A buck converter is used to '+
        'supply power from a 12V power supply.',
        subdesc:
            'I intend to use Google\'s MediaPipe for vision based gesture controls. '+
            'I am also very eager to try an EMG sensor to map the muscle movements of a person to this dexterous hand. The plan is to attach the sensor to the person\'s forearm and fine tune '+
            'the process for precise and smooth independent finger control.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: `${import.meta.env.BASE_URL}textures/project/project1.2.mp4`,
        logo: `${import.meta.env.BASE_URL}assets/arm_logo2.png`,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight2.png`,
        tags: [
            {
                id: 1,
                name: 'Arduino',
                path: `${import.meta.env.BASE_URL}assets/arduino.svg`,
            },
            {
                id: 2,
                name: 'CPlusPlus',
                path: `${import.meta.env.BASE_URL}assets/c++.svg`,
            },
            {
                id: 3,
                name: 'ROS',
                path: `${import.meta.env.BASE_URL}assets/ros.svg`,
            },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
];

export const myProjects1 = [
    {
        title: 'Nintendo Entertainment System (NES) Emulator',
        desc: 
            'Retro consoles, while old, are quite complex than they seem. ' +
            'Building this NES emulator really pushed me to understand how low level systems work, the importance of working with very limited amounts of memory, and learning the very foundations on which systems are built on. '+
            'Explaining the actual complexity of this project is way beyond the scope of this tiny project section, so I tried to simplify as much as I could.',
        subdesc:
            'Programming this emulator would\'ve been completely impossible without the fantastic resource \'NES DEV wiki\'. ' +
            'The main parts of this emulator are the 6502 based processor, the Picture Processing Unit (PPU) which handles the graphics rendering, and the APU which handles the sound. ' +
            'This project has been one of the most crucial personal projects I\'ve worked on and has taught me a great deal about graphics, computer architectures, processors and memory, how CPUs handle sounds, and the list goes on.' +
            '',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        // texture: '/textures/project/project2.mkv',
        logo: `${import.meta.env.BASE_URL}assets/project-logo1.png`,
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight1.png`,
        tags: [
            // {
            //     id: 1,
            //     name: 'React.js',
            //     path: '/assets/react.svg',
            // },
            {
                id: 2,
                name: 'CPlusPlus',
                path: `${import.meta.env.BASE_URL}assets/c++.svg`,
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Nintendo Entertainment System (NES) Emulator',
        desc: 'Programming this emulator will be done in phases because of the complexity of the PPU. I have already finished implementing the 6502 CPU and the first phase of the PPU. '+
        'In order to test the working of the CPU and the PPU visually, I have used Christopher Pow\'s Nestest ROMs available in his github repository. '+
        'The project also uses OneLoneCoder\'s Pixel Game Engine, which is a pixel drawing and user interface framework.'+
        '',
        subdesc:
            'The first phase of the PPU explores how the NES stores and renders it\'s graphics when it\'s producing the images we see in the background. '+
            'As you can see in the output window, it successfully runs all the tests of the nestest ROM and shows the pattern memory rectangles with the sprite information and the ability to scroll between the 8 visible palettes for colours.  '+
            'I will be more than happy to chat about this project in detail because it\'s impossible to cover the complexity of the project in this section. ',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        // texture: '/textures/project/project2.mkv',
        logo: `${import.meta.env.BASE_URL}assets/project-logo2.png`,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight2.png`,
        tags: [
            // {
            //     id: 1,
            //     name: 'React.js',
            //     path: '/assets/react.svg',
            // },
            {
                id: 2,
                name: 'CPlusPlus',
                path: `${import.meta.env.BASE_URL}assets/c++.svg`,
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
];

export const myProjects2 = [
    {
        title: 'Teleoperation UI for Radiation Mapping Clearpath Husky Robot',
        desc: 'As part of my dissertation for Masters\' in Robotics, I have designed and developed ' +
            'a UI in the Unity Game Engine to control a simulated Clearpath Husky robot for radiation mapping in the Unity 3D environment.',
        subdesc:
            'The main goal of this research project is to explore the idea of developing a UI for robot teleoperation in unsafe radiation zones. ' +
            'Teleoperation UIs have always been complicated with a poor user experience. Past research has suggested that physical separation ' +
            'often causes operators to feel detached and overwhelmed with the complex UI design leading to errors and mission failure. A key difficulty is visualising invisible hazards like radiation ' +
            'while managing complex robot controls. '+
            'To tackle these problems, a fully interactive 3D simulation of the husky robot was created to test a "Hybrid Control" interface. The system '+
            'blends autonomous navigation with manual overrides to ensure safety and efficiency.',
        href: 'https://drive.google.com/file/d/13mfSsfheicW_w2Rq9srNNjr6Pnp5Hra3/view?usp=sharing',
        texture: `${import.meta.env.BASE_URL}textures/project/UIOne.mp4`,
        logo: `${import.meta.env.BASE_URL}assets/project-logo1.png`,
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight1.png`,
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: `${import.meta.env.BASE_URL}assets/unity.svg`,
            },
            {
                id: 2,
                name: 'CSharp',
                path: `${import.meta.env.BASE_URL}assets/c-sharp.svg`,
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
    {
        title: 'Teleoperation UI for Radiation Mapping Clearpath Husky Robot',
        desc: 
            'The UI was designed in layers. The layers being camera modes, environmental overlays, robot telemetry and hazard panels. The system balances autonomous navigation (using A* pathfinding) with obstacle avoidance and manual (WASD) control for precise maneuvering. ' +
            'A novel safety feature automatically cancels autonomous navigation and forces users into manual control if the robot enters a high radiation zone. '+
            'Users can switch between third-person, Bird\'s eye and Free Roam camera modes to get an idea of the environment.',
        subdesc:
            'The project lays the groundwork for extending the system beyond simulation and improving immersion, safety and real world applicability. A key next step is integrating the interface with an actual Clearpath Husky Robot. The addition of VR based teleoperation would allow '+
            'operators to interact with the environment more immersively, using VR controllers for waypoint selection and hazard inspection.',
        href: 'https://drive.google.com/file/d/13mfSsfheicW_w2Rq9srNNjr6Pnp5Hra3/view?usp=sharing',
        texture: `${import.meta.env.BASE_URL}textures/project/UITwo.mp4`,
        logo: `${import.meta.env.BASE_URL}assets/project-logo2.png`,
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: `${import.meta.env.BASE_URL}assets/spotlight2.png`,
        tags: [
            {
                id: 1,
                name: 'Unity',
                path: `${import.meta.env.BASE_URL}assets/unity.svg`,
            },
            {
                id: 2,
                name: 'CSharp',
                path: `${import.meta.env.BASE_URL}assets/c-sharp.svg`,
            },
            // {
            //     id: 3,
            //     name: 'TypeScript',
            //     path: '/assets/typescript.png',
            // },
            // {
            //     id: 4,
            //     name: 'Framer Motion',
            //     path: '/assets/framer.png',
            // },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

// export const workExperiences = [
//     {
//         id: 1,
//         name: 'Framer',
//         pos: 'Lead Web Developer',
//         duration: '2022 - Present',
//         title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
//         icon: '/assets/framer.svg',
//         animation: 'victory',
//     },
//     {
//         id: 2,
//         name: 'Figma',
//         pos: 'Web Developer',
//         duration: '2020 - 2022',
//         title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
//         icon: '/assets/figma.svg',
//         animation: 'clapping',
//     },
//     {
//         id: 3,
//         name: 'Notion',
//         pos: 'Junior Web Developer',
//         duration: '2019 - 2020',
//         title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//         icon: '/assets/notion.svg',
//         animation: 'salute',
//     },
// ];