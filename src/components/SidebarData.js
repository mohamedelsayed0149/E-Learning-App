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
  
  },
  {
    title: 'Information',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contact',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Academic Data',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Status',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  
  },
  {
    title: 'Registering',
    path: '/products',
    icon: <FaIcons.FaUserPlus />,
  
  },
  {
    title: 'MicrosoftTeams',
    path: '/teams',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports 1',
        path: '/teams/teams1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/teams/teams2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/teams/teams3',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Notifications',
    path: '/messages',
    icon: <FaIcons.FaBell />,
  
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  
  },
  {
    title: 'LogOut',
    path: '/logout',
    icon: <BiIcons.BiLogOut/>,
  
  }
];