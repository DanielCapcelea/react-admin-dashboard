import React from 'react';
import {
    GridComponent,
    Inject,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Page,
    Toolbar,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/mockData';
import { Header } from '../components';

const Employees = () => {
    const toolbar = ['Search'];
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                toolbar={toolbar}
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>
        </div>
    );
};
export default Employees;
