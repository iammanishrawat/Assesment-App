import React, { Fragment, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Table from 'react-bootstrap/Table';
import ActionBar from '../../../components/action-bar';
import './style.scss';

const grades = [
  { name: 'VI Class' },
  { name: 'VII Class' },
  { name: 'VIII Class' },
  { name: 'IX Class' },
  { name: 'X Class' },
  { name: 'XII Class' },
];

const subjects = [
  { name: 'Maths' },
  { name: 'Science' },
  { name: 'Social Science' },
  { name: 'English' },
  { name: 'Hindi' },
];


const QuestionTopic = () => {
  const [grade, setGrade] = useState(grades[0]);
  const [subject, setSubject] = useState(subjects[0]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const [menuOpen, setMenuOpen] = useState(true);
  const handleSideMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
            <div className="left-area">
              <h6>Questions Topic</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <button className="custom-active-button rounded-lg" onClick={handleShow}>
                Add New Question Topic
              </button>
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
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={12} align="center">
                  No Data Found Here
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="h5">Create Question Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="horizontal-form">
            <div className="form-group mb-4">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Level Name Here"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="">Class</label>
              <Listbox value={grade} onChange={setGrade}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative text-left">
                    <span className="block truncate">{grade.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {grades.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                              ? 'bg-orange-100 text-orange-700'
                              : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="">Subject</label>
              <Listbox value={subject} onChange={setSubject}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative text-left">
                    <span className="block truncate">{subject.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {subjects.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                              ? 'bg-orange-100 text-orange-700'
                              : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="form-group mb-4">
              <Link to="/question-bank/topics" relative="path">
                <button className="w-full custom-active-button rounded-lg" onClick={handleClose}>Save</button>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuestionTopic;
