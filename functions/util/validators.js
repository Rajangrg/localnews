//validation
const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

//validation
const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

exports.validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Email must be a valid email addresss";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password must not be empty";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Password must match";
  }

  if (isEmpty(data.handle)) {
    errors.handle = "Handle must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false, //if o erros true
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must not be empty";
  }
  if (isEmpty(data.password)) {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false, //if o erros true
  };
};

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (isEmpty(data.bio.trim())) {userDetails.bio = data.bio}else{
    userDetails.bio = data.bio
  }
    ;
  if (isEmpty(data.website.trim())) {
  userDetails.website = data.website
  }else userDetails.website = data.website;
  if (isEmpty(data.location.trim())){ userDetails.location = data.location}else{userDetails.location = data.location};

  return userDetails;
};
