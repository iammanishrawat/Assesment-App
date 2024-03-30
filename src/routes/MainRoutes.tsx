import { lazy } from "react";
import { Loadable, MainLayout } from "components";

const Error404 = Loadable(lazy(() => import("pages/auth/error")));
const Dashboard = Loadable(lazy(() => import("pages/home")));
const QuestionLevel = Loadable(lazy(() => import("pages/question-bank/level")));
const QuestionTopic = Loadable(lazy(() => import("pages/question-bank/topic")));
const QuestionSkills = Loadable(lazy(() => import("pages/question-bank/skills")));
const Question = Loadable(lazy(() => import("pages/question-bank/questions")));
const QuestionPapers = Loadable(lazy(() => import("pages/question-papers")));
const CreateQuestionPaper = Loadable(lazy(() => import("pages/question-papers/create-question-paper")));
const CreateQuestions = Loadable(lazy(() => import("pages/question-bank/create-questions")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: '/question-bank/levels',
      element: <QuestionLevel/>,
    },
    {
      path: '/question-bank/topics',
      element: <QuestionTopic/>,
    },
    {
      path: '/question-bank/skills',
      element: <QuestionSkills/>,
    },
    {
      path: '/question-bank/questions',
      element: <Question/>,
    },
    {
      path: '/question-bank/questions/create',
      element: <CreateQuestions/>,
    },
    {
      path: '/question-papers',
      element: <QuestionPapers/>,
    },
    {
      path: '/question-papers/create',
      element: <CreateQuestionPaper/>,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ],
};

export default MainRoutes;
