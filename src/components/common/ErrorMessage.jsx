import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

// class ErrorMessage extends Component {
//   render () {
//     return (
//       <Message negative>
//         <p>{this.props.errMsg}</p>
//       </Message>
//     );
//   }
// }


// const getOpacityValue = () => {
//   const opacityValue = '0';
//   setTimeout(() => {
//     return opacityValue;
//   }, 800);
// };

const ErrorMessage = props => (<Message negative>
  <p>{props.errorMessage}</p>
</Message>);
export default ErrorMessage;
