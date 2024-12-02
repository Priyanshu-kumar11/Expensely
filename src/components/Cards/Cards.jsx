import { Card, Row } from 'antd';
import './Cards.css';
import React from 'react';
import Button from '../Button/Button';

const Cards = ({ totalBalance, income, expense, showExpenseModal, showIncomeModal, resetBalance }) => {
  return (
    <div>
      <Row className='my-row'>
        <Card className='my-card' bordered={true}>
          <h2>Current Balance</h2>
          <p>Rs.{totalBalance}</p>
          <Button text="Reset Balance" blue={true} onClick={resetBalance} />
        </Card>

        <Card className='my-card' bordered={true}>
          <h2>Total Income</h2>
          <p>Rs.{income}</p>
          <Button text="Add Income" blue={true} onClick={showIncomeModal} />
        </Card>

        <Card className='my-card' bordered={true}>
          <h2>Total Expense</h2>
          <p>Rs.{expense}</p>
          <Button text="Add Expense" blue={true} onClick={showExpenseModal} />
        </Card>
      </Row>
    </div>
  );
};

export default Cards;
