import React from 'react';
import { Table } from 'antd';
const { Column } = Table;
import { renderColumnWriter } from '../../../utils/renderColumns';
import BaseView from '../../BaseTable/BaseView';

const ViewContracts = React.forwardRef(({ onRowClick }, ref) => (
        <BaseView ref={ref} route={'contracts'} onRowClick={onRowClick}>
            <Column title="contract_number" dataIndex="contract_number" key="contract_number" />
            <Column title="created" dataIndex="created" key="created" />
            <Column title="expiration_date" dataIndex="expiration_date" key="expiration_date" />
            <Column title="annulment" dataIndex="annulment" key="annulment" />
            <Column title="annulment_date" dataIndex="annulment_date" key="annulment_date" />
            <Column title="writer" dataIndex="writer" key="writer" render={renderColumnWriter} />
        </BaseView>
    )
)

export default ViewContracts;