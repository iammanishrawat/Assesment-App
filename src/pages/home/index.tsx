import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import UploadSection from '../../components/upload-section';
import AccordionTable from '../../components/accordion-table';
import './style.scss';

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

const Home = () => {
  const [selected, setSelected] = useState(people[0]);
  const [grade, setGrade] = useState(grades[0]);
  const [menuOpen, setMenuOpen] = useState(true);
  const handleSideMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <UploadSection />
      <div className="container">
        <div className="inner-section d-flex gap-1 flex-wrap justify-content-between">
          <div className="left-area">
            <h6>Uploaded Papers and Status</h6>
            <i>Here are All the Uploaded Papers and their Current Status.</i>
          </div>
          <div className="right-area">
            <button className="rounded-lg custom-inactive-button">
              Evaluate All
            </button>
            <button className="rounded-lg custom-inactive-button">
              Delete Answer Sheet
            </button>
            <button className="rounded-lg custom-hollow-button">
              Download Excel Report
            </button>
          </div>
        </div>
      </div>
      <form action="">
        <div className="container">
          <div className="filter-inputs">
            <div className="inner">
              <label htmlFor="">Select Date Range</label>
              <input type="date" className="form-control" />
            </div>
            <div className="inner">
              <label htmlFor="">Select Class</label>
              <Listbox value={grade} onChange={setGrade}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white p-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {grades.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                              ? 'bg-red-100 text-red-700'
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
            <div className="inner">
              <label htmlFor="">Select Student</label>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.name}</span>
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
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white p-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                              ? 'bg-red-100 text-red-700'
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
            <div className="inner">
              <label htmlFor=""></label>
              <button className="rounded-lg custom-inactive-button">Filter</button>
            </div>
            <div className="inner">
              <label htmlFor=""></label>
              <button className="rounded-lg custom-active-button">Clear</button>
            </div>
          </div>
        </div>
      </form>
      <AccordionTable />
    </>
  );
};

export default Home;
