import React from 'react';

const IncidentsCard = ({date, description, title, user}) => {
    return (
        <div>
            <label htmlFor="">{date}</label>
            <label htmlFor="">{description}</label>
            <label htmlFor="">{title}</label>
            <label htmlFor="">{user}</label>
            <a href="">ver detalles</a>
        </div>
    );
}

export default IncidentsCard;