import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import RecommendItemsScene from './RecommendItemsScene';

export default class MarketApp extends Component {
    render() {
        return (
            <RecommendItemsScene />
        );
    }
}

AppRegistry.registerComponent('MarketApp', () => MarketApp);
