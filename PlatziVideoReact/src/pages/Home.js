import React, { Component } from 'react';

import Search from 'Components/Search';
import ListItems from 'Components/Carousel';

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
