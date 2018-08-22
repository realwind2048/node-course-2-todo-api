const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$APEHwuoDg0sf2uTvbnzDHe8UKXKZ4ni/3BEU9wiH8lUPCfMPjn4vO';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, 'secret123');
// console.log(token);
//
// var decoded = jwt.verify(token, 'secret123');
// console.log(decoded);

// THIS IS COVERED BY JWT
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed don\'t trust');
// }
