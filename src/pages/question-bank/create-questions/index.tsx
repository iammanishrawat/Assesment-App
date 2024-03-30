import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import './style.scss';
import { toastSuccess } from 'helpers/toastHelper';
import { useNavigate } from 'react-router-dom';

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

const quetionType = [
  { name: 'Subjective' },
  { name: 'Objective' },
]

const quetionLevel = [
  { name: 'Easy' },
  { name: 'Average' },
  { name: 'Difficult' },
]

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
]

const CreateQuestions = () => {
  const [grade, setGrade] = useState(grades[0]);
  const [subject, setSubject] = useState(subjects[0]);
  const [type, setType] = useState(quetionType[0]);
  const [level, setLevel] = useState(quetionLevel[0]);
  const [mark, setMark] = useState(quetionMarks[0]);
  const [selected, setSelected] = useState(people[0]);
  const navigate = useNavigate();
  const toast = ()=>{   
    toastSuccess('Successfully called')
    navigate("/question-bank/questions")
  }

  return (
    <>
      <div>
        <div className="container">
          <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
            <div className="left-area">
              <h6>Add New Questions</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <button className="custom-inactive-button rounded-lg">Cancel</button>
              <button className="custom-active-button rounded-lg" onClick={() => toast()}>Save</button>
            </div>
          </div>
        </div>
        </div>
      <div className="container">
        <form action="" className="horizaontal-form question-form">
          <div className="form-group mb-4">
            <label htmlFor="">Question Text</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={50}
              className="form-control"
            ></textarea>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
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
              </div>
              <div className="col-md-4 mb-4">
                <div className="form-group">
                  <label htmlFor="">Year</label>
                  <div className="mt-1">
                    <input type="date" className='form-control' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateQuestions;
