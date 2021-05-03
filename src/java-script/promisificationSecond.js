export // Exercise 2
// Rewrite function toggleUserState() so for that does not use callback-function
// and get only two params allUsers , userName and return a promise.
const usersArray = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
  });
};
const logger2 = users => console.table(users);
toggleUserState(usersArray, 'Mango').then(logger2);
toggleUserState(usersArray, 'Lux').then(logger2);
