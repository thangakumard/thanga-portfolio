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
import artificial_intelligence from './artificial_intelligence.png';

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
    artificial_intelligence,
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
        bgImage: '/work-4.png',
        link: 'https://github.com/thangakumard',
        component: null,
    },
    {
        title: 'Microservices Development',
        description: 'Microservices Development',
        bgImage: '/work-1.png',
        link: '',
        component: null,
    },
    {
        title: 'Technical Blog',
        description: 'Technical Blog',
        bgImage: '/work-3.png',
        link: '',
        component: null,
    },
    {
        title: 'Youtube Channel',
        description: 'Youtube Channel',
        bgImage: '/work-2.png',
        link: 'https://www.youtube.com/channel/UCvUgIXcAEzBXKyoTJwwDnWA',
        component: null,
    },
]

export const serviceData = [
    { icon: assets.api, title: 'API and Frontend Development', description: 'Designing and building scalable REST/GraphQL APIs paired with responsive React interfaces — bridging backend logic and polished user experiences across web platforms.', link: '' },
    { icon: assets.test_automation, title: 'Test Automation', description: 'Designing full-spectrum test frameworks spanning API integration, UI end-to-end, and load testing — driving quality gates at every layer with Playwright, Selenium, RestAssured, k6 and Jmeter across automated CI pipelines.', link: '' },
    { icon: assets.ci_cd, title: 'CI/CD', description: 'Streamlining delivery pipelines with GitHub Actions, GitLab CI, Jenkins, and Docker — enabling automated builds, testing, and zero-downtime deployments across cloud environments.', link: '' },
    { icon: assets.artificial_intelligence, title: 'AI & LLM Integration', description: 'Embedding large language models and AI tooling into production workflows — from prompt engineering and RAG pipelines to building developer-facing LLM-powered features at scale.', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, title: 'Education', description: 'Masters in Computer Science – UW (In Progress)\nBachelor of Engineering – Anna University, India' },
    {
        icon: assets.code_icon,
        title: 'Technical Skills',
        description: 'Languages: Java, JavaScript/Node.js, Python, C#, C++, Go, Groovy',
        detail: {
            heading: 'Full Technical Stack',
            body: [
                { label: 'Languages', value: 'Java, JavaScript/Node.js, Python, C#, C++, Groovy, Go' },
                { label: 'APIs & Protocols', value: 'REST, GraphQL, HTTP/HTTPS, gRPC, Thrift — design, implementation, and versioning' },
                { label: 'Distributed Caching', value: 'Redis (caching layers, pub/sub, session management), RabbitMQ, Kafka' },
                { label: 'Databases & Storage', value: 'PostgreSQL, MongoDB, DynamoDB, Azure Cosmos DB, SQL Server, Trino, Apache Iceberg' },
                { label: 'Frameworks', value: 'Spring Boot, Express.js, React, ASP.NET Core, .NET Framework' },
                { label: 'Testing', value: 'Selenium, Playwright, JMeter, K6' },
                { label: 'Infrastructure & DevOps', value: 'Kubernetes, Docker, Jenkins, CI/CD pipelines, Rancher, Grafana, Kibana' },
                { label: 'AI & LLM Integration', value: 'Azure OpenAI Service, LLM API Integration (OpenAI, Gemini, Anthropic), AI Agents & Tool Use' },
                { label: 'Cloud', value: 'AWS (KMS, DynamoDB), Microsoft Azure (OpenAI, Cosmos DB)' },
                { label: 'Certifications', value: 'Azure Certified Developer Associate' },
            ],
        },
    },
    {
        icon: assets.project_icon,
        title: 'Expertise',
        description: 'Seasoned Full-Stack Engineer passionate about building large-scale distributed systems',
        detail: {
            heading: 'Areas of expertise',
            body: 'Seasoned Full-Stack Engineer passionate about building large-scale distributed systems that power exceptional user experiences. Deep expertise in RESTful and GraphQL API design, microservices architecture, Redis-powered caching, and multi-region deployments on AWS and Azure. Known for delivering secure, fault-tolerant, and scalable solutions that balance technical excellence with business impact.',
        },
    },
];

export const toolsData = [
    assets.vscode, assets.kafka, assets.azure, assets.aws, assets.kubernetes, assets.docker, assets.Claude, assets.git
];