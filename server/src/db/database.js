const getUserByEmail = function(db, email) {
  return db
    .query(
      `
    SELECT * FROM users
    WHERE users.email = $1
  `,
      [email]
    )
    .then(res => res.rows)
    .catch(err => console.log(err));
};

const addUser = function(db, user) {
  return db
    .query(
      `
    INSERT INTO users (
      first_name, last_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
      [
        user.first_name,
        user.last_name,
        user.email,
        user.password
      ]
    )
    .then(res => res.rows)
    .catch(err => console.log(err));
};

const getUserById = function(db, userId) {
  return db
    .query(
      `
    SELECT * FROM users
    WHERE id = $1
  `,
      [userId]
    )
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const addPhoto = function(db, item) {
  return db
    .query(
      `
    INSERT INTO photos (
     title, description, category, photo)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
      [
        photo.title,
        photo.description,
        photo.category,
        photo.photo
      ]
    )
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

// const updateItem = function(db, item, id) {
//   return db
//     .query(
//       `
//     UPDATE items
//     SET title = $2,
//         description = $3,
//         category = $4,
//         daily_rate = $5,
//         deposit = $6,
//         photo = $7
//     WHERE id = $1
//     RETURNING *;
//   `,
//       [
//         id,
//         item.title,
//         item.description,
//         item.category,
//         item.daily_rate,
//         item.deposit,
//         item.photo
//       ]
//     )
//     .then(res => res.rows[0])
//     .catch(err => console.log(err));
// };

// const deleteItemById = function(db, itemId) {
//   return db
//     .query(
//       `
//     DELETE FROM items WHERE items.id = $1;
//   `,
//       [itemId]
//     )
//     .catch(err => console.log(err));
// };



module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  addPhoto
};
