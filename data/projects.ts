type Status = 'Complete' | 'In Progress' | 'Research' | 'Upcoming'

export type Project = {
  title: string
  caption: string
  description: string
  tags: string[]
  gradient: string
  images: string[]
  status: Status
  url: string
  slug: string
  github?: string
  why: string
  how: string
  results: string
}

export const projects: Project[] = [
  {
    title: 'L1 Certification Rocket',
    caption: '',
    description: '',
    tags: ['OpenRocket', 'Onshape', 'AirShaper', 'CFD', '3D Printing', 'Laser Cutting'],
    gradient: 'rgba(255,255,227,0.05)',
    images: ['/projects/rocket/rocket_cfd.jpg', '/projects/rocket/rocket_assembly.jpg', '/projects/rocket/rocket_cad.jpg'],
    status: 'In Progress',
    url: '#',
    slug: 'l1-certification-rocket',
    why: 'I wanted to design and build a high-powered rocket that meets the requirements for NAR L1 certification, while creating a fully documented design that future SEDS Redlands Chapter members can build on. I also wanted most of the components to be manufactured in-house at the Redlands Makerspace at a low cost.',
    how: 'Rocketry leaves no margin for error, so I validated the engineering before ordering any parts. I finalized the design in OpenRocket to reach a stability of 1.5 cal, then took the 2D design into Onshape to build a full CAD assembly and ran AirShaper CFD simulations to confirm an aerodynamic ogive nosecone. The nosecone and tube coupler were 3D printed in ABS, while the centering rings and fins were laser-cut from 3 mm plywood at the University of Redlands Makerspace. SEDS members helped with assembly, including epoxying the fins to the centering ring to withstand flight loads.',
    results: 'The rocket is fully assembled and awaiting its November launch date, where I hope to earn my NAR L1 certification. The complete design documentation will be passed down to future SEDS Redlands Chapter members.',
  },
  {
    title: 'Heart Disease Prediction System',
    caption: '',
    description: '',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest', 'Streamlit'],
    gradient: 'rgba(170,186,153,0.07)',
    images: ['/projects/heart/heart_dashboard.jpg', '/projects/heart/heart_roc.png', '/projects/heart/heart_tree.jpg'],
    status: 'Complete',
    url: '#',
    slug: 'heart-disease-predictor',
    why: 'Deciding who should be sent for an angiogram and who can safely go home is a high-stakes call that clinics must make from limited information. I wanted to build a decision-support tool for this scenario: a model that accurately separates patients with and without heart disease, paired with an interactive dashboard that lets clinicians and patients explore the prediction themselves.',
    how: 'Trained the model on 2,000 synthetic patient records patterned on the UCI Machine Learning Repository Heart Disease dataset, so no real patient information was used. I benchmarked a random forest against a logistic regression baseline and selected the random forest for its higher ROC AUC. Chest pain type, age, ST depression, maximum heart rate, and sex drive the predictions, which I examined by visualizing a decision tree from the model. I then built a Streamlit dashboard with pages for trying a patient, understanding the model, adjusting the decision threshold, reviewing performance, and reading my analysis notes.',
    results: 'The random forest achieved an AUC of 0.94, outperforming the logistic regression baseline. The "Try a patient" feature lets users enter their own information and see a prediction. The dashboard is a demonstration only, as it uses synthetic data and is not intended for real medical decisions, but it shows how machine learning can automate parts of the patient screening process.',
  },
  {
    title: 'Autonomous Hexapod with Lidar Navigation',
    caption: '',
    description: '',
    tags: ['Python', 'OpenCV', 'Linux', 'ROS2', 'Lidar', 'Onshape', '3D Printing'],
    gradient: 'rgba(170,186,153,0.09)',
    images: ['/projects/hexapod/hexapod_cad.jpg', '/projects/hexapod/hexapod_print.png'],
    status: 'In Progress',
    url: '#',
    slug: 'autonomous-hexapod',
    why: 'Legged locomotion offers terrain adaptability that wheeled robots cannot match. This project explores how a six legged platform can navigate unstructured environments autonomously using low-cost Lidar sensing.',
    how: 'Designed the chassis in Onshape and 3D printed all structural components. Implemented inverse kinematics for controlled movement in Python. I am now working on the software stack to comine Lidar mapping and a livestream camera feed to run on a Raspberry Pi 3.',
    results: 'The robot will successfully traverse uneven surfaces and avoid obstacles in real time. Work is ongoing so stay updated.',
  },
  {
    title: 'Voice Controlled 4 DOF Robotic Arm',
    caption: '',
    description: '',
    tags: ['Python', 'C++', 'Arduino IDE', 'Onshape', '3D Printing'],
    gradient: 'rgba(170,186,153,0.05)',
    images: ['/projects/arm/arm_model.png', '/projects/arm/FEA.jpg'],
    status: 'Complete',
    url: 'https://github.com/3N1C0/Robotic_Arm',
    slug: 'voice-controlled-robotic-arm',
    github: 'https://github.com/3N1C0/Robotic_Arm',
    why: 'Voice interfaces lower the barrier to operating robotic hardware without a direct controller. This project investigates how natural language commands can map to precise servo movements in a 4 DOF arm, all while keeping the entire build under $100, which was the biggest constraint when procuring parts.',
    how: 'Modeled the full arm assembly in Onshape and printed the components in ABS, then reworked the design after SimScale FEA simulations to minimize high-stress points in the servo enclosures. Wired the system from a schematic made in Cirkit Designer, soldering the servo driver connections to avoid loose wires. On the software side, I wrote inverse kinematics control firmware in C++ on an Arduino and built a Python speech-recognition layer that parses spoken commands and sends serial instructions to the microcontroller. Once the core code worked, I used Claude Code and Cursor to build a "J.A.R.V.I.S." website for sending voice commands, adding another layer to the pipeline.',
    results: 'Achieved reliable control through voice alone with sub-second command latency, and developed a "J.A.R.V.I.S." style interface that can execute multiple commands. The project was presented at the University of Redlands Engineering open house to faculty and students. Next, I plan to build a larger arm with cycloidal gearboxes at each joint for smoother control and higher load capacity.',
  },
  {
    title: '7-Inch Carbon Fiber FPV Drone',
    caption: '',
    description: '',
    tags: ['Beta Flight', 'UAV Research', 'Soldering'],
    gradient: 'rgba(255,255,227,0.04)',
    images: ['/projects/drone/Drone_Disassembled.png'],
    status: 'In Progress',
    url: '#',
    slug: 'carbon-fiber-fpv-drone',
    why: 'Traditional FPV frames trade rigidity for weight which is why me and my team wanted to explore a carbon fiber frame that could withstand high-speed maneuvers and crashes while still being light enough for competitive flying.',
    how: 'Currently in the testing phase, we have built a 7-inch quadcopter with a carbon fiber frame and are now tuning the PID controller for stable flight.',
    results: 'This project is in progress, expected to be complete in Fall 2026 through the University of Redlands Robotics and Drone Club.',
  },
  {
    title: 'Japan Natural Disaster Analysis Dashboard',
    caption: '',
    description: '',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Streamlit'],
    gradient: 'rgba(170,186,153,0.06)',
    images: ['/projects/japan/japan.png'],
    status: 'Complete',
    url: 'https://github.com/3N1C0/Japan_Risk_Analysis',
    slug: 'japan-disaster-dashboard',
    github: 'https://github.com/3N1C0/Japan_Risk_Analysis',
    why: 'Japan experiences a disproportionate share of global seismic and meteorological events. Understanding historical patterns in that data can inform infrastructure planning and emergency response strategies.',
    how: 'Collected and cleaned multi-decade disaster records using Pandas, ran clustering and trend analysis with Scikit-learn, and built an interactive Streamlit dashboard that lets users filter by disaster type, region, and time period.',
    results: 'The dashboard surfaces clear regional risk patterns and seasonal trends. It was presented as a data science capstone and highlighted the value of open government datasets for disaster preparedness research.',
  },
  {
    title: 'ROS2 Based Smart Car',
    caption: '',
    description: '',
    tags: ['ROS2', 'OpenCV', 'Linux', 'Lidar'],
    gradient: 'rgba(180,200,240,0.06)',
    images: ['/projects/car/car_cv.png', '/projects/car/car_demo.jpg', '/projects/car/car_group.jpg'],
    status: 'Complete',
    url: '#',
    slug: 'ros2-smart-car',
    why: 'Ground vehicles are an accessible platform for learning autonomous navigation. This project focused on integrating perception and planning in ROS2 on constrained hardware.',
    how: 'Mounted a Lidar sensor and camera on a aluminum chassis, wrote ROS2 nodes for obstacle detection with OpenCV, and implemented a simple path planning layer for autonomous corridor navigation on Linux.',
    results: 'The vehicle navigates hallway environments without collision and served as a foundation for more advanced sensor-fusion experiments on the Hexapod project.',
  },
  {
    title: 'Axial Flux Motor',
    caption: '',
    description: '',
    tags: ['Soldering', 'Onshape', '3D Printing'],
    gradient: 'rgba(180,200,240,0.06)',
    images: ['/projects/flux/flux_a.png', '/projects/flux/flux_b.png', '/projects/flux/flux_c.png'],
    status: 'Complete',
    url: '#',
    slug: 'ros2-smart-car-2',  
    why: 'Combat robotics demands motors that are compact, lightweight, and reliable under repeated impact, making a custom axial flux design a better fit than off-the-shelf options for spinning a weapon blade at high RPM. I also wanted many of the parts to be 3D printed to cut down on external procurement costs.',
    how: 'Designed an 8-pole, 6-slot brushless axial flux motor in Onshape with fully modular components, engineering the assembly so the interior could be quickly accessed and serviced without compromising structural integrity. The housing holds six miniature copper spools around a central shaft supported by bearings on both ends, with M3 nuts and screws securing the hexagonal enclosure. The rotor has 8 cutouts for neodymium magnets that drive rotation. Because the architecture is 3D printed, I can keep spare parts in stock in case the motor is damaged during testing.',
    results: 'The final motor delivers high RPM with a lightweight, cogging-free architecture, giving the combat robot a fast-spinning blade while keeping maintenance quick and mobility intact. I am currently experimenting with different attachments to see which best fits my vision for the combat robot.',
    },
]
