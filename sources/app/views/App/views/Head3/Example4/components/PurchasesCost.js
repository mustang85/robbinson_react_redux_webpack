import React, { Component, PropTypes } from 'react';

/**
 * dependencies
 */

import Grid from 'react-bootstrap/lib/Grid';

export class PurchasesCost extends Component {
  static propTypes = {
    totalCost: PropTypes.number,
    tax: PropTypes.string
  };

  render() {
    const { totalCost, tax } = this.props;
    return (
      <Grid className="PurchasesList">
        <h2>Общая стоимость покупок</h2>
        <div>
            <strong>без налога: {`${totalCost} ₽`}</strong><br />
            <strong>с учетом {tax} налога: {`${totalCost * (parseInt(tax, 10) / 100) + totalCost } ₽`}</strong>
        </div>
      </Grid>
    );
  }
}

export default PurchasesCost;
