import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

function PageDropdown (){
    return(
        <div>
            <DropdownButton id="dropdown-basic-button" title="PIlih Bahasa">
                <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}
export default PageDropdown