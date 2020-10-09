
const checkCache = (req, res, next) => {
  console.log('hey there');
  let cache = {};
  next();
}

module.exports = checkCache;