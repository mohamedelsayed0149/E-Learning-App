import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Informations',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Registering',
    path: '/products',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text'
  },
  {
    title: 'MicrosoftTeams',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports',
        path: '/team/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/team/team2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/team/team3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Notifications',
    path: '/messages',
    icon: <FaIcons.FaBell />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'LogOut',
    path: '/logout',
    icon: <BiIcons.BiLogOut/>,
    cName: 'nav-text'
  }
];