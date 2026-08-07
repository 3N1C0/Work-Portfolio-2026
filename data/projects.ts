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
    why: 'Voice interfaces lower the barrier to operating robotic hardware without a direct controller. This project investigates how natural language commands can map to precise servo movements in a 4 DOF arm.',
    how: 'Modeled the arm in Onshape and printed the links in ABS. Wrote servo control firmware in C++ on an Arduino, then built a Python speech-recognition layer that parses spoken commands and sends serial instructions to the microcontroller.',
    results: 'Achieved reliable control through voice alone with sub-second command, and developed a "J.A.R.V.I.S." style user interface that can execute multiple commands. The project was presented at the University of Redlands Engineering open house.',
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
    why: 'Combat robotics demands motors that are compact, lightweight, and reliable under repeated impact, making a custom axial flux design a better fit than off-the-shelf options for spinning a weapon blade at high RPM.',
    how: 'Designed an 8-pole, 6-slot brushless axial flux motor with fully modular components, engineering the assembly so the interior could be quickly accessed and serviced without compromising structural integrity.',
    results: 'The final motor delivers high RPM with a lightweight, cogging free architecture, thus giving the battlebot a fast-spinning blade while keeping maintenance quick and mobility intact.',
    },
]
