import React from 'react';
import CreditCardUtilities from '@igorlima-draft/react-credit-card-input/lib/credit-card-utilities';

// SassMeister | The Sass Playground!
// https://www.sassmeister.com/
//
// Four ways to style react components
// https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
const styles = {
  container: {
    display: 'inline-block'
  },
  fieldWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  isInvalid: {
    border: '1px solid #ff3860'
  },
  cardImage: {
    height: '1.5em',
    zIndex: 2,
    width: '2em'
  },
  inputWrapper: {
    alignItems: 'center',
    marginLeft: '0.5em',
    // position: 'relative',
    display: 'flex',
    transition: 'transform 0.5s',
    transform: 'translateX(0)',
    height: '1.1em',
    overflow: 'hidden'
  },
  inputWrapperPsedoAfter: {
    // https://stackoverflow.com/questions/43701748/react-pseudo-selector-inline-styling
    // https://stackoverflow.com/questions/45730224/css-pseudo-code-libefore-in-react-inline-style
    // https://blog.logrocket.com/the-best-react-inline-style-libraries-comparing-radium-aphrodite-emotion-849ef148c473
    // https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e
    // https://stackoverflow.com/questions/28269669/css-pseudo-elements-in-react/28269950
    visibility: 'hidden',
    height: 0
  },
  crediCardInput: {
    border: '0px',
    position: 'absolute',
    width: '100%',
    fontSize: '1em',
    outline: '0px'
  },
  dangerText: {
    fontSize: '0.8rem',
    margin: '5px 0 0 0',
    color: '#ff3860'
  }
};

class CreditCardInput extends CreditCardUtilities {
  handleCardNumberFocus = ({ onFocus } = { onFocus: null }) => e => {
    const { cardNumberInputProps } = this.props;
    cardNumberInputProps.onFocus && cardNumberInputProps.onFocus(e);
    onFocus && onFocus(e);
  };
  render = () => {
    const { cardImage, errorText, isFormInvalid } = this.state;
    const {
      cardImageClassName,
      cardImageStyle,
      cardCVVInputProps,
      cardExpiryInputProps,
      cardNumberInputProps,
      cardCVCInputRenderer,
      cardExpiryInputRenderer,
      cardNumberInputRenderer,
      containerClassName,
      containerStyle,
      dangerTextClassName,
      dangerTextStyle,
      fieldClassName,
      fieldStyle,
      inputClassName,
      inputStyle,
      invalidStyle,
      customTextLabels
    } = this.props;

    return (
      <div
        className={containerClassName}
        style={Object.assign({}, styles.container, containerStyle)}
      >
        <div
          id="field-wrapper"
          className={fieldClassName}
          style={Object.assign(
            {},
            styles.fieldWrapper,
            fieldStyle,
            isFormInvalid && invalidStyle
          )}
        >
          <img
            alt="credit card flag"
            className={cardImageClassName}
            style={Object.assign({}, styles.cardImage, cardImageStyle)}
            src={cardImage}
          />
          <label
            style={Object.assign({}, styles.inputWrapper, inputStyle)}
            className="card-number-wrapper"
            data-max="9999 9999 9999 9999 9999"
          >
            {cardNumberInputRenderer({
              handleCardNumberChange: onChange =>
                this.handleCardNumberChange({ onChange }),
              handleCardNumberBlur: onBlur =>
                this.handleCardNumberBlur({ onBlur }),
              handleCardNumberFocus: onFocus =>
                this.handleCardNumberFocus({ onFocus }),
              props: {
                id: 'card-number',
                ref: cardNumberField => {
                  this.cardNumberField = cardNumberField;
                },
                style: styles.crediCardInput,
                maxLength: '19',
                autoComplete: 'cc-number',
                className: `credit-card-input ${inputClassName}`,
                placeholder:
                  customTextLabels.cardNumberPlaceholder || 'Card Number',
                type: 'tel',
                ...cardNumberInputProps,
                onBlur: this.handleCardNumberBlur(),
                onFocus: this.handleCardNumberFocus(),
                onChange: this.handleCardNumberChange(),
                onKeyPress: this.handleCardNumberKeyPress
              }
            })}
            <label style={styles.inputWrapperPsedoAfter}>
              9999 9999 9999 9999 9999
            </label>
          </label>
        </div>
        <div
          id="field-wrapper"
          className={fieldClassName}
          style={Object.assign(
            { margin: '10px 0 0 0' },
            styles.fieldWrapper,
            fieldStyle,
            isFormInvalid && invalidStyle
          )}
        >
          <label
            style={Object.assign({}, styles.inputWrapper, inputStyle)}
            className="card-expiry-wrapper"
            data-max="MM / YY 9"
          >
            {cardExpiryInputRenderer({
              handleCardExpiryChange: onChange =>
                this.handleCardExpiryChange({ onChange }),
              handleCardExpiryBlur: onBlur =>
                this.handleCardExpiryBlur({ onBlur }),
              props: {
                id: 'card-expiry',
                ref: cardExpiryField => {
                  this.cardExpiryField = cardExpiryField;
                },
                style: styles.crediCardInput,
                autoComplete: 'cc-exp',
                className: `credit-card-input ${inputClassName}`,
                placeholder: customTextLabels.expiryPlaceholder || 'MM/YY',
                type: 'tel',
                ...cardExpiryInputProps,
                onBlur: this.handleCardExpiryBlur(),
                onChange: this.handleCardExpiryChange(),
                onKeyDown: this.handleKeyDown(this.cardNumberField),
                onKeyPress: this.handleCardExpiryKeyPress
              }
            })}
            <label style={styles.inputWrapperPsedoAfter}>MM / YY 9</label>
          </label>
          <label
            style={Object.assign({}, styles.inputWrapper, inputStyle)}
            className="card-cvc-wrapper"
            data-max="99999"
          >
            {cardCVCInputRenderer({
              handleCardCVCChange: onChange =>
                this.handleCardCVCChange({ onChange }),
              handleCardCVCBlur: onBlur => this.handleCardCVCBlur({ onBlur }),
              props: {
                id: 'cvc',
                ref: cvcField => {
                  this.cvcField = cvcField;
                },
                style: styles.crediCardInput,
                maxLength: '5',
                autoComplete: 'off',
                className: `credit-card-input ${inputClassName}`,
                placeholder: customTextLabels.cvcPlaceholder || 'CVV',
                type: 'tel',
                ...cardCVVInputProps,
                onBlur: this.handleCardCVCBlur(),
                onChange: this.handleCardCVCChange(),
                onKeyDown: this.handleKeyDown(this.cardExpiryField),
                onKeyPress: this.handleCardCVCKeyPress
              }
            })}
            <label style={styles.inputWrapperPsedoAfter}>99999</label>
          </label>
        </div>
        {errorText && (
          <p
            className={dangerTextClassName}
            style={Object.assign({}, styles.dangerText, dangerTextStyle)}
          >
            {errorText}
          </p>
        )}
      </div>
    );
  };
}

export default CreditCardInput;
