import { dashboardIcon, levelIcon, logoutIcon, questionIcon, skillIcon, topicIcon } from "assets";
import { RouteType } from "./config";

const userRoutes: RouteType[] = [
  {
    path: "/dashboard",
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      img: <img src={dashboardIcon} alt="Dashboard" />,
    },
    children: null
  },
  {
    path: "/question-bank",
    state: "questions",
    sidebarProps: {
      displayText: "Questions Bank",
      img: <img src={questionIcon} alt="Questions" />,
    },
    children: [
      {
        path: "/question-bank/levels",
        state: "levels",
        sidebarProps: {
          displayText: "Levels",
          img: <img src={levelIcon} alt="Levels" />,
        },
        children: null
      },
      {
        path: "/question-bank/topics",
        state: "topics",
        sidebarProps: {
          displayText: "Topics",
          img: <img src={topicIcon} alt="Topics" />,
        },
        children: null
      },
      {
        path: "/question-bank/skills",
        state: "skills",
        sidebarProps: {
          displayText: "Skills",
          img: <img src={skillIcon} alt="Skills" />,
        },
        children: null
      },
      {
        path: "/question-bank/questions",
        state: "questions",
        sidebarProps: {
          displayText: "Questions",
          img: <img src={questionIcon} alt="Questions" />,
        },
        children: null
      },
    ]
  },
  {
    path: "/question-papers",
    state: "question-papers",
    sidebarProps: {
      displayText: "Question Papers",
      img: <img src={dashboardIcon} alt="Dashboard" />,
    },
    children: null
  },
  {
    path: "/login",
    state: "logout",
    sidebarProps: {
      displayText: "Logout",
      img: <img src={logoutIcon} alt="Logout" />,
    },
    children: null
  },
];

export default userRoutes;
