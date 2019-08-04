import React from 'react';

import styles from './Users.module.css';

const Users = ({ items = [] }) => {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map(({ id, name, surname, desc }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
