// This is a global handler function used in controllers to save wrapping
// all functions in a try/catch block, since all async functions return a promise, then if we just call .catch it is like having an implicit try catch block wrapper
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
    // catch function can also be written as:
    // .catch(next()) and it will pass down the error object
  };
};
