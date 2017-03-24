import React, { Component } from 'react';

/**
 * dependencies
 */

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class PurchasesForm extends Component {
  handleAddPurchases = () => {
    const name = this.namePurchases.value;
    const price = parseInt(this.pricePurchases.value, 10);

    if (name === '' || price === '' || isNaN(price)) {
        return;
    }

    this.props.onPurchasesAdd({ name, price });
    this.cleaneInputs();
  }

  cleaneInputs() {
    this.namePurchases.value = '';
    this.pricePurchases.value = '';
  }


  render() {
    return (
      <Grid className="PurchasesForm">
        <h2>Форма</h2>
        <Row>
          <form action="" >
            <Col xs={5}>
              <FormGroup>
                <ControlLabel>Название покупки</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={input => this.namePurchases = input }
                  placeholder="Enter text" />
              </FormGroup>
            </Col>

            <Col xs={5}>
              <FormGroup>
                <ControlLabel>Стоимость покупки</ControlLabel>
                <FormControl
                  type="text"
                  inputRef={(input) => this.pricePurchases = input}
                  placeholder="Enter text" />
              </FormGroup>
            </Col>

            <Col xs={2}>
              <Button className="PurchasesForm-btn" onClick={this.handleAddPurchases}>Добавить</Button>
            </Col>

          </form>
        </Row>
      </Grid>
    );
  }
}

export default PurchasesForm;
