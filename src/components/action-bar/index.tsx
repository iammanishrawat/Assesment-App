import React, { useState } from 'react';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import './style.scss';

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

const ActionBar = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="action-area">
      <div className="search-div">
        <span className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a5a5a5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search any keyword"
        />
      </div>
      <div className="actions-buttons">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-printer"
          >
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-grid-2x2"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 12h18" />
            <path d="M12 3v18" />
          </svg>
        </span>
        <span>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-list-filter"
                  >
                    <path d="M3 6h18" />
                    <path d="M7 12h10" />
                    <path d="M10 18h4" />
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-4 transform">
                    <div className="filter-box rounded-lg bg-orange-50 p-3">
                      <form action="" className="horizontal-form">
                        <h5 className="mb-0">Filters</h5>
                        <hr />
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Question Test</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Class</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Subject</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Topic</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Type</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Level</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Skill</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group mb-4">
                              <label htmlFor="">Marks</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Tags</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">Action</label>
                              <Listbox value={selected} onChange={setSelected}>
                                <div className="relative">
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
                        </div>
                      </form>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </span>
      </div>
    </div>
  );
};

export default ActionBar;
