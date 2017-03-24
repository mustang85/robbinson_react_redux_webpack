import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * dependencies
 */

import PurchasesForm from '../components/PurchasesForm';
import PurchasesList from '../components/PurchasesList';
import PurchasesCost from '../components/PurchasesCost';
import ModalTask from 'components/ModalTask';

import {
  actions as purchasesActions
} from '../redux'

import { TAX, TASK, HELMET } from '../consts';

import '../styles';


class Purchases extends React.Component {
  static propTypes = {
    purchases: PropTypes.array,
    actions:  PropTypes.object
  };

  handleAddPurchases = (purchases) => {
    const { actions: { addPurchases } } = this.props;
    addPurchases(purchases);
  }

  render() {
    const { purchases, totalCost } = this.props
    return (
      <div className="Purchases">
        <Helmet title={HELMET} />

        <h1>Purchases</h1>

        <PurchasesForm onPurchasesAdd={this.handleAddPurchases} />

        {purchases.length > 0 && (
          <PurchasesList list={purchases} />
        )}

        {totalCost > 0 && (
          <PurchasesCost totalCost={totalCost} tax={TAX} />
        )}

        <ModalTask title={TASK.title} body={TASK.body} />

      </div>
    );
  }
}

export default connect(
  (state) => ({
    purchases: state.app.head3.example4.purchases,
    totalCost: state.app.head3.example4.totalCost
  }),
  (dispatch) => ({ actions: bindActionCreators(purchasesActions, dispatch) })
)(Purchases);
