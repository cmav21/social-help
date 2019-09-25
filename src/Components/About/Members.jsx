import React from 'react';
import MemberCard from './MemberCard'; 
import { Col } from 'react-bootstrap';

const members = [
    {
        title: 'Developer',
        name: "César",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Developer',
        name: "Diana",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Ux Designer',
        name: "Paola",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Ux Designer',
        name: "Fernanda",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Developer',
        name: "Jonathan",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Developer',
        name: "Alan",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Developer',
        name: "Mariana",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
    {
        title: 'Developer',
        name: "Aurelia",
        image: 'https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg'
    },
]

const renderMembersCards = () => (
    members.map(({name, image, title}, i) => <Col className="col-12 mb-4 col-md-4" key={i}><MemberCard name={name} image={image} title={title}/></Col> )
);


export default renderMembersCards;