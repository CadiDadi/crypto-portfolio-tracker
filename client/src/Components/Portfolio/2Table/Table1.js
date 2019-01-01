import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, products, selectRowProp, format } from 'react-bootstrap-table';
import './Table1.css'


class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={products}
          selectRow={selectRowProp}
          striped
          hover
          condensed
          pagination
          insertRow
          deleteRow
          search
        >
          <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataAlign="center" dataFormat={format}>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table