import React, { Component } from 'react';
import BaseTable from '../BaseTable';

class Books extends Component {
    render() {
        return (
            <>
                <BaseTable route={"books"} />
            </>
        )
    }
}

export default Books;