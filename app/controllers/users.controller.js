// const arrayUtils = require('@devbox/common');

// const getUsers = function(req, res) {
//   console.warn(arrayUtils.isDuplicate());
//   res.json({ users: [{ name: 'Juni Brosas' }] });
// };

// module.exports = {
//   getUsers
// };

const getUsers = function(req, res) {
  res.json({ result: 'success' });
};

module.exports = {
  getUsers,
};
