import React, { Component } from 'react';
import { connect } from 'react-redux';

import { usersSelectors, usersOperations } from '../redux/users';
import { paginationSelectors } from '../redux/pagination';
import constants from '../configs/constants';

import Users from './Users/Users';
import Pagination from './Pagination/Pagination';

import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  getUsers = () => {
    const { users, currentPage } = this.props;
    const usersLength = constants.LIMIT_USERS;

    const usersViev =
      currentPage === 1
        ? users.slice(0, usersLength)
        : users.slice(
            currentPage * usersLength - usersLength,
            currentPage * usersLength,
          );

    return usersViev;
  };

  render() {
    return (
      <div>
        <div className={styles.users}>
          <Users items={this.getUsers()} />
        </div>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: usersSelectors.getUsers(state),
  currentPage: paginationSelectors.getCurrentPage(state),
});

const mapDispatchToProps = {
  getUsers: usersOperations.getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
