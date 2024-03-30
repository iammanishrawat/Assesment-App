import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ActionBar from '../../../components/action-bar';
import './style.scss';

const Question = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
            <div className="left-area">
              <h6>Questions</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <Link to="/question-bank/questions/create">
                <button className="custom-active-button rounded-lg">
                  Add New Question
                </button>
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
                <th className="w-full lg:w-2/4">Questions</th>
                <th>Class</th>
                <th>Subject</th>
                <th>Topic</th>
                <th>Type</th>
                <th>Level</th>
                <th>Skill</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                  <td colSpan={12} align='center'>
                      No Data Found Here
                  </td>
              </tr> */}
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
              <tr>
                <td>
                  <input className="theme-checkbox" type="checkbox" />
                </td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora ab dolores eveniet labore accusantium accusamus
                  assumenda delectus, facere harum quas? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Tempora ab dolores eveniet
                  labore accusantium accusamus assumenda delectus, facere harum
                  quas?
                </td>
                <td>XII Class</td>
                <td>Physics</td>
                <td>Velocity</td>
                <td>Objective</td>
                <td>Moderate</td>
                <td>Easy</td>
                <td>40</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Question;
