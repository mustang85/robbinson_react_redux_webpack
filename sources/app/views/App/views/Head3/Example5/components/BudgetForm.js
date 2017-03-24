import React, { Component } from 'react';

/**
 * dependencies
 */

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class BudgetForm extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      choiceAction: false
    };
  }

  handleAddTransaction = (e) => {
    let amount = parseInt(this.inputAmount.value, 10);

    if (isNaN(amount)) {
      return;
    }

    if (e.target.innerHTML === 'Deposit') {
      amount = '-' + amount;
    }

    this.props.onAddTransaction(amount);
    this.cleanField();
  }

  handleCalcBalance = () => {
    this.props.onCalcBalance();
    this.cleanField();
  }

  cleanField() {
    this.inputAmount.value = '';
  }


  handleSubmit = (e) => {
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <Row className="BudgetForm">
        <Col xs={12}>
          <form action="" onSubmit={this.handleSubmit} >
            <FormGroup className="BudgetForm-group">
              <Col xs={6} >
                <FormControl
                  type="text"
                  placeholder="enter amount"
                  inputRef={(input) => this.inputAmount = input}
                  disabled={false}
                />
              </Col>
              <Button onClick={this.handleAddTransaction}>Withdraw</Button>
              <Button onClick={this.handleAddTransaction}>Deposit</Button>
              <Button onClick={this.handleCalcBalance}>Balance</Button>
            </FormGroup>

          </form>
        </Col>
      </Row>
    );
  }
}

export default BudgetForm;
