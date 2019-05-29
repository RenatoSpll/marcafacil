import React, {Component} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Cliente from './ClienteMain'
import Agendar from './Agendar'

const Principal = () => <Cliente />;

const Ag = () => <Agendar />;



export default class ClienteRoutes extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'principal', title: 'Home', icon: 'home' },
      { key: 'agendar', title: 'Agendar', icon: 'schedule' },
      ,
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    principal: Principal,
    agendar: Ag,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}