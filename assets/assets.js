import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import user_icon from './user-icon.png';
import user_icon_dark from './user-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import lang_icon from './lang-icon.png';
import lib_icon from './lib-icon.png';
import frame_icon from './frame-icon.png';
import vscode from './vscode.png';
import trae from './trae.png';
import cursor from './cursor.png';
import firebase from './firebase.png';
import figma from './figma.png';
import canva from './canva.png';
import git from './git.png';
import npm from './npm.png';
import github from './github.png';
import gitlab from './gitlab.png';
import cloudinary from './cloudinary.png';
import ggcloud from './ggcloud.png';
import mysql from './mysql.png';
import mongodb from './mongodb.png';
import postman from './postman.png';
import swagger from './swagger.png';
import xampp from './xampp.png';
import trello from './trello.png';
import notion from './notion.png';
import jira from './jira.png';
import webpack from './webpack.png';
import prettier from './prettier.png';
import framer_motion from './framer-motion.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    user_icon,
    user_icon_dark,
    project_icon,
    project_icon_dark,
    lang_icon,
    lib_icon,
    frame_icon,
    vscode,
    trae,
    cursor,
    firebase,
    figma,
    canva,
    git,
    npm,
    github,
    gitlab,
    cloudinary,
    ggcloud,
    mysql,
    mongodb,
    postman,
    swagger,
    xampp,
    trello,
    notion,
    jira,
    webpack,
    prettier,
    framer_motion,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Electro',
        description: 'Web Design',
        bgImage: '/electro.png',
        link: 'https://github.com/ZanHiu/nextjs_electro'
    },
    {
        title: 'Goofulfill',
        description: 'Dashboard Design',
        bgImage: '/goofulfill.png',
        link: 'https://gitlab.com/goobits.tech/goofulfill-frontend'
    },
    {
        title: 'Porfolio',
        description: 'Web Design',
        bgImage: '/porfolio.png',
        link: 'https://github.com/ZanHiu/personal_porfolio'
    },
    {
        title: 'Melodies',
        description: 'UI/UX Design',
        bgImage: '/melodies.png',
        link: 'https://www.figma.com/design/IEAI5d8vjfCefqASkCY8KX/Melodies-Project?node-id=0-1&p=f&t=MwYylADBsCF5ZeTs-0'
    },
]

export const techstacksData = [
    { icon: assets.web_icon, title: 'Languages', description: 'HTML, CSS, Javascript, Typescript, PHP' },
    { icon: assets.mobile_icon, title: 'Frameworks', description: 'ReactJS, NextJS, NodeJS, ExpressJS, AngularJS' },
    { icon: assets.ui_icon, title: 'Libraries', description: 'Boostrap, TailwindCSS, ChakraUI, Ant-Design' },
]

export const servicesData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.user_icon, iconDark: assets.user_icon_dark, title: 'Information', description: '0978074381, ngvannhieu2005@gmail.com, https://github.com/ZanHiu, 12 District Ho Chi Minh City' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'FPT Polytechnic College - 2 years, Major: Web Programming, Average score: 8.4/10, GPA: 3.6/4' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Experience', description: 'Fintalent Extend Team - 6 months, Position: Front-end Developer, Employment type: Freelance' },
    // { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Ecommerce Website, Streaming Website, Dashboard Website, Porfolio Website' }
];

export const toolsData = [
    // vscode, trae, cursor
    assets.vscode, assets.trae, assets.cursor,
    // mysql, mongodb,
    assets.mysql, assets.mongodb, 
    assets.framer_motion, 
    // figma, canva, postman, xampp, github, gitlab
    assets.figma, assets.canva, assets.postman, assets.swagger, assets.xampp, assets.git, assets.npm, 
    // cloudinary, google cloud
    assets.cloudinary, assets.ggcloud, 
    // trello, notion
    assets.trello, assets.notion, assets.jira, 
];
