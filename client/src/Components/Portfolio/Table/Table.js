import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Table.css'

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(20);

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BootstrapTable
          data={ products }
          pagination>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}


// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Charlie</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Mac</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     }
// }

// export default Table;