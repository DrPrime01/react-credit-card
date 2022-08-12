import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';

function CreditCard({cardinfo}) {
  return (
    <div className='credit-card'>
      <Bank bank={cardinfo.bank} />
      <CardNumber cardNumber={cardinfo.cardNumber} />
      <ExpiryDate date={cardinfo.expiryDate} />
      <CardHolder name={cardinfo.cardHolder} />
    </div>
  )
}

function Bank({bank}) {
  return (
    <div className='bank-name'>{bank}</div>
  )
}

Bank.propTypes = {
  bank: PropTypes.string
}

function CardNumber({cardNumber}) {
  return (
    <div className='card-number'>
      <span className='number'>{cardNumber}</span>
      <span className='num'>0123</span>
    </div>
  )
}

CardNumber.propTypes = {
  cardNumber: PropTypes.string
}

function ExpiryDate({date}) {
  return (
    <div className='expiry-date'>
      <div>Valid Thru</div>
      <span className='date'>{date}</span>
    </div>
  )
}

ExpiryDate.propTypes = {
  date: PropTypes.string
}

function CardHolder({name}) {
  return (
    <div className='card-holder-name'>
      {name}
    </div>
  )
}

CardHolder.propTypes = {
  name: PropTypes.string
}

const cardDetails = {
  bank: "Big Bank, Inc.",
  cardNumber: "0123 4567 8910 1112",
  expiryDate: "08/12",
  cardHolder: "John Doe"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CreditCard cardinfo={cardDetails} />);

