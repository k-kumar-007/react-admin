import { React } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const Sidebar = [
    {
        title: 'Home',
        path: '/home',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Setup',
        path: '/setup',
        icons: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Front Office',
        path: '/frontOffice',
        icons: <AiIcons.AiFillApple />,
        cName: 'nav-text'
    },
    {
        title: 'Front Cash',
        path: '/frontCash',
        icons: <AiIcons.AiFillChrome />,
        cName: 'nav-text'
    },
    {
        title: 'Restaurant',
        path: '/restaurant',
        icons: <AiIcons.AiFillCode />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icons: <AiIcons.AiOutlineDropbox />,
        cName: 'nav-text'
    }
]

