import user_image from './user-image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import vscode from './vscode.png';
import kafka from './kafka.svg';
import git from './git.png';
import azure from './azure.png';
import aws from './aws.png';
import kubernetes from './kubernetes.png';
import docker from './docker.png';
import Claude from './Claude.png';
import right_arrow_white from './right-arrow-white.png';
import profile_logo from './profile_logo.png';
import mail_icon from './mail_icon.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import arrow_icon from './arrow-icon.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import web_icon from './web-icon.png';
import microservices from './microservices.jpg';
import api from './api.png';
import ui_development from './ui_development.png';
import test_automation from './test_automation.png';
import ci_cd from './ci_cd.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';

export const assets = {
    user_image,
    code_icon,
    edu_icon,
    project_icon,
    vscode,
    git,
    azure,
    aws,
    kafka,
    kubernetes,
    docker,
    Claude,
    right_arrow_white,
    profile_logo,
    mail_icon,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    arrow_icon,
    menu_black,
    close_black,
    web_icon,
    microservices,
    api,
    ui_development,
    test_automation,
    ci_cd,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
};

export const workData = [
    {
        title: 'My Github Repositories',
        description: 'Check out my GitHub repositories',
        bgImage: '/work-1.png',
        link: 'https://github.com/thangakumard?tab=repositories',
        component: null,
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        link: '',
        component: null,
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
        link: '',
        component: null,
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        link: '',
        component: null,
    },
]

export const serviceData = [
    { icon: assets.api, title: 'API Development', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.ui_development, title: 'Frontend Development', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.test_automation, title: 'Test Automation', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.ci_cd, title: 'CI/CD', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, title: 'Education', description: 'Masters in Computer Science – UW (In Progress)\nBachelor of Engineering – Anna University, India' },
    { icon: assets.code_icon, title: 'Languages', description: 'Java, JavaScript/Node.js, Python, C#, C++, Go, Groovy' },
    { icon: assets.project_icon, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.kafka, assets.azure, assets.aws, assets.kubernetes, assets.docker, assets.Claude, assets.git
];