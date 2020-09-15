import React from 'react';
import { connect } from 'react-redux';

import AddUser from './AddUser';

import { addUser } from '../../../Redux/mainReducer';

const AddUserContainer = props => (
  <AddUser { ...props }/>
);

const mapStateToProps = state => ({
  userDescription: state.main.userDescription
});

export default connect( mapStateToProps, { addUser })( AddUserContainer );