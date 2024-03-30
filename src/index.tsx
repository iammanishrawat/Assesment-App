// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/home';
// import Question from './pages/question-bank/questions';
// import CreateQuestions from './pages/question-bank/create-questions';
// import QuestionTopic from './pages/question-bank/topic';
// import QuestionLevel from './pages/question-bank/level';
// import QuestionSkills from './pages/question-bank/skills';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import Login from 'pages/auth/login';
// // import "tailwindcss/tailwind.css"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login/>,
//   },
//   {
//     path: '/login',
//     element: <Login/>,
//   },
//   {
//     path: '/dashboard',
//     element: <Home/>,
//   },
//   {
//     path: '/levels',
//     element: <QuestionLevel/>,
//   },
//   {
//     path: '/topics',
//     element: <QuestionTopic/>,
//   },
//   {
//     path: '/skills',
//     element: <QuestionSkills/>,
//   },
//   {
//     path: '/questions',
//     element: <Question/>,
//   },
//   {
//     path: '/questions/create',
//     element: <CreateQuestions/>,
//   },
// ]);

// const root = createRoot(document.querySelector('#root'));
// root.render(<RouterProvider router={router} />);

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter basename="">
      <App />
    </BrowserRouter>
  </Provider>
);

// reportWebVitals();
