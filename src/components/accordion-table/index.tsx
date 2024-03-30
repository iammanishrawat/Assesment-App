import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import excelIcon from '../../assets/img/icons/excel.png';
import pdfIcon from '../../assets/img/icons/pdf.png';
import studentIcon from '../../assets/img/icons/avatar.png';

const AccordionTable = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0" className="inner-section">
        <Accordion.Item eventKey="0">
          <Accordion.Header>MA 1</Accordion.Header>
          <Accordion.Body>
            <div className="responsive-table">
              <Table responsive>
                <thead>
                  <tr>
                    <th>
                      <input className="theme-checkbox" type="checkbox" />
                    </th>
                    <th>Question Name</th>
                    <th>Actions</th>
                    <th>Student</th>
                    <th>File Name</th>
                    <th>Progress</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input className="theme-checkbox" type="checkbox" />
                    </td>
                    <td>
                      <div className="line-clamp-div">2hnov2019_1706512768</div>
                    </td>
                    <td>
                      <div className="action-button">
                        <button className='rounded-lg'>
                          <img src={excelIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <img src={pdfIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                        </button>
                        <button className='rounded-lg'>Evaluate</button>
                      </div>
                    </td>
                    <td>
                      <div className="student-button">
                        <img src={studentIcon} alt="student-image" />
                        Test One
                      </div>
                    </td>
                    <td>
                      <div className="line-clamp-div">
                        VigilMechanismandWhistleBlowerPolicy_1709382006.pdf
                      </div>
                    </td>
                    <td>EVALUATING</td>
                    <td>2nd Mar 2024, 5:50 pm</td>
                    <td>
                      <button className="processed-button rounded-lg">Processed</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="theme-checkbox" type="checkbox" />
                    </td>
                    <td>
                      <div className="line-clamp-div">2hnov2019_1706512768</div>
                    </td>
                    <td>
                      <div className="action-button">
                        <button className='rounded-lg'>
                          <img src={excelIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <img src={pdfIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                        </button>
                        <button className='rounded-lg'>Evaluate</button>
                      </div>
                    </td>
                    <td>
                      <div className="student-button">
                        <img src={studentIcon} alt="student-image" />
                        Test One
                      </div>
                    </td>
                    <td>
                      <div className="line-clamp-div">
                        VigilMechanismandWhistleBlowerPolicy_1709382006.pdf
                      </div>
                    </td>
                    <td>EVALUATING</td>
                    <td>2nd Mar 2024, 5:50 pm</td>
                    <td>
                      <button className="processed-button rounded-lg">Processed</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="theme-checkbox" type="checkbox" />
                    </td>
                    <td>
                      <div className="line-clamp-div">2hnov2019_1706512768</div>
                    </td>
                    <td>
                      <div className="action-button">
                        <button className='rounded-lg'>
                          <img src={excelIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <img src={pdfIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                        </button>
                        <button className='rounded-lg'>Evaluate</button>
                      </div>
                    </td>
                    <td>
                      <div className="student-button">
                        <img src={studentIcon} alt="student-image" />
                        Test One
                      </div>
                    </td>
                    <td>
                      <div className="line-clamp-div">
                        VigilMechanismandWhistleBlowerPolicy_1709382006.pdf
                      </div>
                    </td>
                    <td>EVALUATING</td>
                    <td>2nd Mar 2024, 5:50 pm</td>
                    <td>
                      <button className="processed-button rounded-lg">Processed</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="theme-checkbox" type="checkbox" />
                    </td>
                    <td>
                      <div className="line-clamp-div">2hnov2019_1706512768</div>
                    </td>
                    <td>
                      <div className="action-button">
                        <button className='rounded-lg'>
                          <img src={excelIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <img src={pdfIcon} alt="excel-image" />
                        </button>
                        <button className='rounded-lg'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-trash-2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                        </button>
                        <button className='rounded-lg'>Evaluate</button>
                      </div>
                    </td>
                    <td>
                      <div className="student-button">
                        <img src={studentIcon} alt="student-image" />
                        Test One
                      </div>
                    </td>
                    <td>
                      <div className="line-clamp-div">
                        VigilMechanismandWhistleBlowerPolicy_1709382006.pdf
                      </div>
                    </td>
                    <td>EVALUATING</td>
                    <td>2nd Mar 2024, 5:50 pm</td>
                    <td>
                      <button className="processed-button rounded-lg">Processed</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>MA 2</Accordion.Header>
          <Accordion.Body>
            <p className="text-center mb-0">No Data</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionTable;
