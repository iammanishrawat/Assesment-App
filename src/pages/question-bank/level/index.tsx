import React, { Fragment, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ActionBar from '../../../components/action-bar';
import './style.scss';

const QuestionLevel = () => {
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
              <h6>Question Level</h6>
              <i>Here are All the Uploaded Papers and their Current Status.</i>
            </div>
            <div className="right-area">
              <button className="custom-active-button rounded-lg" onClick={handleShow}>
                Add New Level
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
                <th>Sr.No</th>
                <th>Name</th>
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
          <Modal.Title className='h5'>Create Question Level</Modal.Title>
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
              <Link to="/question-bank/levels" relative="path">
                <button className="w-full custom-active-button rounded-lg" onClick={handleClose}>Save</button>
              </Link>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuestionLevel;
