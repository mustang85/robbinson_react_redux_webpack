import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * dependencies
 */

import ModalTask from 'components/ModalTask';
import BudgetHeader from '../components/BudgetHeader';
import BudgetForm from '../components/BudgetForm';
import BudgetList from '../components/BudgetList';

import '../styles/Budget.styles';

import {
  addTransaction, calcBalance
} from '../redux/actions'

import {
    HELMET, TASK, BALANCE_START_MONTH
} from '../consts';

class Budget extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  handleAddTransaction = (transaction) => {
    this.props.addTransaction(transaction);
  }

  handleCalcBalance = () => {
    this.props.calcBalance(this.props.transactions);
  }

  render() {
    const { transactions } = this.props;
    return (
      <div className="Budget">
        <Helmet title={HELMET} />

        <BudgetHeader balance={this.props.balance} />

        <BudgetForm
          onAddTransaction={this.handleAddTransaction}
          onCalcBalance={this.handleCalcBalance}
        />

        {transactions.length > 0 && (
          <BudgetList transactions={this.props.transactions} />
        )}

        <ModalTask title={TASK.title} body={TASK.body} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    transactions: state.app.head3.example5.transaction,
    balance: state.app.head3.example5.balance
  }),
  (dispatch) => ({
    addTransaction: bindActionCreators(addTransaction, dispatch),
    calcBalance: bindActionCreators(calcBalance, dispatch)
  })
)(Budget);
