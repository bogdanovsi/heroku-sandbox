import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnBook, renderColumnCustomer } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewOrders = React.forwardRef(({ onRowClick }, ref) => (
    <BaseView ref={ref} route={'orders'} onRowClick={onRowClick}>
            <Column title="receipt_date" dataIndex="receipt_date" key="receipt_date" />
            <Column title="completion_date" dataIndex="completion_date" key="completion_date" />
            <Column title="oredered_book_copies_number" dataIndex="oredered_book_copies_number" key="oredered_book_copies_number" />
            <Column title="book" dataIndex="book" key="book" render={renderColumnBook} />
            <Column title="customer" dataIndex="customer" key="customer" render={renderColumnCustomer} />
        </BaseView>
    )
);

export default ViewOrders;