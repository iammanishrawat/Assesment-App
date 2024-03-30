import React, { Fragment, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Listbox, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import './style.scss';
import ActionBar from 'components/action-bar';
import Accordion from 'react-bootstrap/Accordion';
import { Table } from 'react-bootstrap';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

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

const quetionType = [{ name: 'Subjective' }, { name: 'Objective' }];

const quetionLevel = [
  { name: 'Easy' },
  { name: 'Average' },
  { name: 'Difficult' },
];

const quetionMarks = [
  { name: 0 },
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
];

const CreateQuestionPapers = () => {
  const [grade, setGrade] = useState(grades[0]);
  const [subject, setSubject] = useState(subjects[0]);
  const [type, setType] = useState(quetionType[0]);
  const [level, setLevel] = useState(quetionLevel[0]);
  const [mark, setMark] = useState(quetionMarks[0]);
  const [selected, setSelected] = useState(people[0]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="container">
          <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
            <div className="left-area">
              <h6>Add New Question Papers</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <button className="custom-inactive-button rounded-lg">
                Cancel
              </button>
              <button
                className="custom-active-button rounded-lg"
                onClick={handleShow}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Accordion defaultActiveKey="1" className="inner-section">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Filter</Accordion.Header>
            <Accordion.Body>
              <form action="" className="horizaontal-form question-form">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Class</label>
                        <Listbox value={grade} onChange={setGrade}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {grade.name}
                              </span>
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Subject</label>
                        <Listbox value={subject} onChange={setSubject}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {subject.name}
                              </span>
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Type</label>
                        <Listbox value={type} onChange={setType}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {type.name}
                              </span>
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
                                {quetionType.map((person, personIdx) => (
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Level</label>
                        <Listbox value={level} onChange={setLevel}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {level.name}
                              </span>
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
                                {quetionLevel.map((person, personIdx) => (
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Skills</label>
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {selected.name}
                              </span>
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
                                {people.map((person, personIdx) => (
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Marks</label>
                        <Listbox value={mark} onChange={setMark}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {mark.name}
                              </span>
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
                                {quetionMarks.map((person, personIdx) => (
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Topic</label>
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative text-left">
                              <span className="block truncate">
                                {selected.name}
                              </span>
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
                                {people.map((person, personIdx) => (
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
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
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
                    </div>
                    <div className="col-6 col-md-2 mb-4">
                      <div className="form-group">
                        <label htmlFor="">Year</label>
                        <div className="mt-1">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="container">
        <div className="responsive-table">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <input className="theme-checkbox" type="checkbox" />
                </th>
                <th className="w-full lg:w-full">Questions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td colSpan={12} align='center'>
                      No Data Found Here
                  </td>
              </tr>
              {/* <tr>
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
              </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={show} size="xl" onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="h5">BluePrint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="responsive-table">
            <Table responsive bordered className="blueprint-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Content</th>
                  <th colSpan={4}>
                    Knowledge
                    <tr>
                      <th>VSA</th>
                      <th>SA1</th>
                      <th>SA2</th>
                      <th>LA</th>
                    </tr>
                  </th>
                  <th colSpan={4}>
                    Understanding
                    <tr>
                      <th>VSA</th>
                      <th>SA1</th>
                      <th>SA2</th>
                      <th>LA</th>
                    </tr>
                  </th>
                  <th colSpan={4}>
                    Application
                    <tr>
                      <th>VSA</th>
                      <th>SA1</th>
                      <th>SA2</th>
                      <th>LA</th>
                    </tr>
                  </th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Genetics & Evolution</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>40(6)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Biology in Human welfare</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>40(6)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ecology</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>1(1)</td>
                  <td>--</td>
                  <td>--</td>
                  <td>1(1)</td>
                  <td>40(6)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th align="center" colSpan={2}>
                    Total
                  </th>
                  <th align="center" colSpan={4}>
                    20(9)
                  </th>
                  <th align="center" colSpan={4}>
                    20(9)
                  </th>
                  <th align="center" colSpan={4}>
                    20(9)
                  </th>
                  <th>70(30)</th>
                </tr>
              </tfoot>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="flex justify-end gap-2">
            <Link to="/question-papers" relative="path">
              <button
                className="custom-inactive-button rounded-lg"
                onClick={handleClose}
              >
                Back to edit
              </button>
            </Link>
            <Link to="/question-papers" relative="path">
              <button
                className="custom-active-button rounded-lg"
                onClick={handleClose}
              >
                Proceed
              </button>
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateQuestionPapers;
