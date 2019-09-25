import { Modal } from 'react-bootstrap';
import React from 'react';

const DescriptionCard = ({ show, handleClose, title, renderContent }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {renderContent()}
        </Modal.Body>
    </Modal>
);

export default DescriptionCard;