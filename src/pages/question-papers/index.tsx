import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ActionBar from 'components/action-bar';
import './style.scss';

const QuestionPaper = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
            <div className="left-area">
              <h6>Questions Papers</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <Link to="/question-papers/create">
                <button className="custom-active-button rounded-lg">Add New Question Paper</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ActionBar />
        <div className="responsive-table">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <input className="theme-checkbox" type="checkbox" />
                </th>
                <th>Title</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Question Type</th>
                <th>Created By</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>Third Year Exam</td>
                <td>Bsc</td>
                <td>Computer Science</td>
                <td>Hard</td>
                <td>Kavita</td>
                <td>March/2023</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>Freshman</td>
                <td>BTech</td>
                <td>Maths</td>
                <td>Hard</td>
                <td>Kavita</td>
                <td>March/2023</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>Freshman</td>
                <td>Bsc</td>
                <td>English</td>
                <td>Hard</td>
                <td>Kavita</td>
                <td>March/2023</td>
              </tr>
              {/* <tr>
                  <td colSpan={12} align='center'>
                      No Data Found Here
                  </td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default QuestionPaper;
