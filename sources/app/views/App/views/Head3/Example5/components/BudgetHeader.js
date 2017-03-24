import React, { Component, PropTypes } from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import classNames from 'classnames/bind';

class BudgetHeader extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.balance != this.props.balance
    })
  }

  render() {
    const { balance } = this.props;
    const { active } = this.state;
    const balanceClass = classNames('BudgetHeader-balance', { 'flash': active });
    return (
      <Row className='BudgetHeader'>
        <Col xs={12}>
          <PageHeader>
            Остаток счета в начале месяца
            <span className={balanceClass}> {balance}</span>
          </PageHeader>
        </Col>
      </Row>
    );
  }
}

export default BudgetHeader;
