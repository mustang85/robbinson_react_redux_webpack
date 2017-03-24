import React, { Component, PropTypes } from 'react';

import Table from 'react-bootstrap/lib/Table';

export default function BudgetList(props) {
  const { transactions } = props;
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Transactions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, amount }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{amount}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

BudgetList.propTypes = {
  transactions: PropTypes.array.isRequired
};
