import React, { Component } from 'react';
import Search from '../components/Search';
import ListItems from '../components/ListItems';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <ListItems />
      </div>
    );
  }
}
