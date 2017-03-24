import React, { Component, PropTypes } from 'react';

/**
 * dependencies
 */

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Table from 'react-bootstrap/lib/Table';

// PurchasesList.propTypes = {

// };

class PurchasesList extends Component {
  render() {
    const { list } = this.props
    return (
      <Grid className="PurchasesList">
        <h2>Список покупок</h2>
        <Row>
          <Col xs={12}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Purchases name</th>
                  <th>Price ₽</th>
                </tr>
              </thead>
              <tbody>
                {list.map(({ id, name, price }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PurchasesList;
