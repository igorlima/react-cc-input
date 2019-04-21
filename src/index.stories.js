import React from 'react';
import { storiesOf } from '@storybook/react';
import CreditCardInput from '.';
import './index.stories.css';

const containerStyle = {
  fontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  fontSize: '16px',
  fontVariant: 'normal',
  margin: 0,
  padding: '20px',
  WebkitFontSmoothing: 'antialiased'
};

storiesOf('CreditCardInput', module).add('default', () => (
  <div
    style={Object.assign({}, containerStyle, { backgroundColor: '#f0f0f0' })}
  >
    <CreditCardInput
      fieldStyle={{ border: '1px solid #b5b5b5' }}
      containerClassName="innerWrapper"
      inputStyle={{
        flexGrow: 1
      }}
      customTextLabels={{
        cardNumberPlaceholder: 'Card Number'
      }}
      cardCVVInputProps={{
        onBlur: e => console.log('cvc blur', e),
        onChange: e => console.log('cvc change', e),
        onError: err => console.log(`cvc error: ${err}`)
      }}
      cardExpiryInputProps={{
        onBlur: e => console.log('expiry blur', e),
        onChange: e => console.log('expiry change', e),
        onError: err => console.log(`expiry error: ${err}`)
      }}
      cardNumberInputProps={{
        onBlur: e => console.log('number blur', e),
        onChange: e => console.log('number change', e),
        onError: err => console.log(`number error: ${err}`)
      }}
    />
  </div>
));
