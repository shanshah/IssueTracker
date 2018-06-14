// import { isEmail, isLength, trim } from 'validator';
//
// const validateUserName = (userData) => {
//   const email = userData.username.trim();
//   const validationObj = {
//     isValid: false,
//     errMessage: [],
//   };
//   if (!isLength(email, { min: 1 })) {
//     // validationObj.errMessage.push(ERROR_MESSAGES.EMAIL_MANDATORY);
//     validationObj.errMessage.push('please enter valid email');
//     return validationObj;
//   }
//   /* If email provided is invalid */
//   if (!isEmail(email)) {
//     // validationObj.errMessage.push(ERROR_MESSAGES.EMAIL_INVALID);
//     validationObj.errMessage.push('please enter valid email');
//     return validationObj;
//   }
//   validationObj.isValid = true;
//   validationObj.errMessage.length = 0;
//   return validationObj;
// };
//
// const validatePassword = (userData) => {
//   const password = trim(userData.password);
//   const validationObj = {
//     isValid: false,
//     errMessage: [],
//   };
//   // if (!isLength(password, { min: 1 })) {
//   //   // validationObj.errMessage.push(ERROR_MESSAGES.EMAIL_MANDATORY);
//   //   validationObj.isValid = false;
//   //   validationObj.errMessage.push('please enter password');
//   //   return validationObj;
//   // }
//   // if (!password.match(/^[A-Za-z]\w{7,14}$/)) {
//   //   validationObj.isValid = true;
//   //   validationObj.errMessage.push('Please enter valid password');
//   //   return validationObj;
//   // }
//   if (!password) {
//     validationObj.isValid = false;
//     validationObj.errMessage.push('Please enter valid password');
//     return validationObj;
//   }
//   validationObj.isValid = true;
//   validationObj.errMessage.length = 0;
//   return validationObj;
// };
//
// export {
//   validateUserName,
//   validatePassword,
// };

import { isEmail, isLength, trim } from 'validator';

const validateIssueOwner = (issueValidationData) => {
  const issueOwner = trim(issueValidationData.owner);
  const validationObj = {
    isValid: false,
    errMessage: [],
  };
  if (!issueOwner) {
    // validationObj.isValid = false;
    validationObj.errMessage.push('issue owner can not be empty');
    return validationObj;
  }
  validationObj.isValid = true;
  validationObj.errMessage.length = 0;
  return validationObj;
};

const validateIssueEffort = (issueValidationData) => {
  const issueEffort = trim(issueValidationData.effort);
  const validationObj = {
    isValid: false,
    errMessage: [],
  };
  if (!issueEffort) {
    // validationObj.isValid = false;
    validationObj.errMessage.push('issue effort can not be empty');
    return validationObj;
  }
  validationObj.isValid = true;
  validationObj.errMessage.length = 0;
  return validationObj;
};

const validateIssueTitle = (issueValidationData) => {
  const issueTitle = trim(issueValidationData.title);
  const validationObj = {
    isValid: false,
    errMessage: [],
  };
  if (!issueTitle) {
    // validationObj.isValid = false;
    validationObj.errMessage.push('Issue title can not be empty');
    return validationObj;
  }
  validationObj.isValid = true;
  validationObj.errMessage.length = 0;
  return validationObj;
};

const validateCompletionDate = (issueValidationData) => {
  console.log(issueValidationData.completionDate._d);
  const issueCompletionDate = trim(issueValidationData.completionDate._d);
  const validationObj = {
    isValid: false,
    errMessage: [],
  };
  if (!issueCompletionDate) {
    // validationObj.isValid = false;
    validationObj.errMessage.push('Issue title can not be empty');
    return validationObj;
  }
  validationObj.isValid = true;
  validationObj.errMessage.length = 0;
  return validationObj;
};

export {
  validateIssueOwner,
  validateIssueEffort,
  validateIssueTitle,
  validateCompletionDate,
};

