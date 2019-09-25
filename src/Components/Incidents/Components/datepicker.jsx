import React from 'react';
import { Button } from 'react-bootstrap';

const DatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
        <Button onClick={onClick}>
            {value}
        </Button>
));

export default DatePickerInput;
