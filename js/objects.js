// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback); // for iterate object keys
//console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   //   console.log(key, feedback[key]); v2 output

//   totalFeedback += feedback[key];
// }

// console.log('Total Feedback: ', totalFeedback);

// const values = Object.values(feedback); // best for output object values!
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }
// console.log('Total Feedback: ', totalFeedback);
// ----------------------------------

// const friends = [
//   { name: 'Kiwi', online: false },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: true },
//   { name: 'Mango', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//   //   console.table(friend);
//   friend.newprop = 333;
// }
// console.table(friends);

// compare and find the names:
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of friends) {
//     if (friend.name === friendName) {
//       return 'Found!!';
//     }
//   }
//   return 'Not Found!!';
// };
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// need to get all names
// const getAllNames = function (allFriends) {
//   let foundName = []; // creating the new array
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     foundName.push(friend.name); // push name to new array
//   }
//   return foundName;
// };
// console.log(getAllNames(friends)); // call function, send argument

// get all friends who is online
// const getOnlineFriends = function (allFriends) {
//   const isOnline = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       isOnline.push(friend);
//     }
//   }
//   return isOnline;
// };
// console.log(getOnlineFriends(friends));

// get all friends who is online - return objects
// const getFriendsStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue; // !!
//     }
//     friendsByStatus.offline.push(friend);
//   }
//   return friendsByStatus;
// };
// console.log(getFriendsStatus(friends));

// count object keys
// const obj = {
//   a: 2,
//   b: 43,
//   c: 21,
//   d: 5,
// };
// console.log(Object.keys(obj).length);
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const lastTag = apartment.tags[apartment.tags.length - 1];
console.log(lastTag);
