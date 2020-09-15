import React from 'react';

const TableHead = props => {
  let arrowType = props.sortType ? <span>&#9650;</span> : <span>&#9660;</span>;

  return (
    <thead>
      <tr>
        <th onClick={ () => props.sortColumn( 'id' ) }
          className="table-ceil table-head">ID { props.sortField === 'id' && arrowType }</th>
        <th onClick={ () => props.sortColumn( 'firstName' )} className="table-ceil table-head">First
          Name { props.sortField === 'firstName' && arrowType }</th>
        <th onClick={ () => props.sortColumn('lastName')} className="table-ceil table-head">Last
          Name { props.sortField === 'lastName' && arrowType }</th>
        <th onClick={ () => props.sortColumn('email')}
          className="table-ceil table-head">Email { props.sortField === 'email' && arrowType }</th>
        <th onClick={ () => props.sortColumn('phone')}
          className="table-ceil table-head">Phone { props.sortField === 'phone' && arrowType }</th>
      </tr>
    </thead>

  );
};
export default TableHead;