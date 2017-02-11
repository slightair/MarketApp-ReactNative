import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View
} from 'react-native';

import RecommendItemsScene from './RecommendItemsScene';

export default class MarketApp extends Component {
    constructor(props) {
        super(props)

        this.state = {selectedTab: 'recommendedItems'}
        this.base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD/0lEQVR4Xu2aWchNURTHf59ZxqLMMjwokbGIB+LB8CAPpmSKBxRKhgjxgEJmyQMZS16EFxFJPKAMJXkg86xkSmb617l1u9899wx3ffucvnvWy71111l7rd/de5+11t5VVLhUVXj8ZACyGVDhBLIlUOETINsEsyWQLYFkCXQH/gKPk3IjySXQH7juARgI3E0CQpIATgCTvKCPAdMrCUAX4CFQ1wv6F9AVeOkaQlIzYCewqCDYLcDySgDQEngONC0I9jPQCdCnM0liBqwENvpEuATY5ix6cJ4JNgCeAO18gnwG6NX42xUE1zNgFnAwILipwPHaCkDv+l4Bwd0CBtRGAKOBsyEDGwFcCqlblprLJXABGBnSW4EaG1K3LDVXAPoCtyN4+g/oDdyL8EwsVVcAjgLTInqozXJ2xGciq1sDqAO08RIaJTUdve/K+upH9O4nsMtLml7kfb71CqiI5oqrRwEg3bZAZ6CDF1guwFyw7YF6Jp75G1Hd8ArIQVFWqe/5kN4AWkaBEhZAa+CGV7AEGk2BggotldifgnwJC2AocDXIWMp+Vy6hnKKkhAUgvb3AvCCDKfl9d5Fqs6hrYQHkHl4HrE1JkH5urCpRbFV7JioAGZgP7AG046dJ/gBzgQNRnIoDQPYnAGpjNYwyWA3qfgemAKejjhEXgMZRvn4KaBZ1UGP9j8A44Eocu+UA0Hj9vAJHyU8SonxARVbsjnK5ABS0GhjngW6OCTwARpV7pmABQHErQ1QFp6LHhdwExgDvyx3MCoD8aA6cAYaV61TA8xeB8cBXi3EsAcifRsBJ79+x8K/QhgBPBFQomYg1ADm1GVhm4l11I+uBNZa2awKAWlnDLZ3Ms3XO2/XNzFsDUHao93JN5QYfgFZm0dfAuUBPB20svXYfWUGwngEzgMNWzvnYUcqrk2UTsQagMnSBiWf+RrYCS63GsAZwDRhk5ZyPncuWm6wlADU9vzioEJUAtbBqjFoC0JUXpahhRYekug8gcJu8DnLYZ7XZ3g+rXErPEoCaEftCOKVZouPx7cAPT7+xlzwJSJMQNmYCR0LoBapYAtgPzCkxom6DHQLUslLbupio3S44ui9Uyjd1pBYGRhdCwRLAHaBPiY1rcYTjMbW0dY1miI893S4bHCK+QBUrAJrCutpSeCiihEV1gQqkODLZqy10GJMvWjrKNnVIUpZYAdCrT6/AnGidbwB25K3zuI6qwtR7f0XB/qBNN8qBa9HxrQDoiptOctUkVVd2NfAubsQ+z+lajfYHbYDfgB4W1+qsAMhnbWBaAk+NAy80J9jqAr+2GMcSgIU/zm1kAJwjT9mA2QxI2R/i3J1sBjhHnrIBsxmQsj/EuTsVPwP+A2wYkEErYIEEAAAAAElFTkSuQmCC'
    }

    setTab(tabId) {
        this.setState({selectedTab: tabId});
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="おすすめ"
                    icon={{uri: this.base64Icon, scale: 2}}
                    selected={this.state.selectedTab === 'recommendedItems'}
                    onPress={() => this.setTab('recommendedItems')}
                >
                    <RecommendItemsScene />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="カテゴリ"
                    icon={{uri: this.base64Icon, scale: 2}}
                    selected={this.state.selectedTab === 'categories'}
                    onPress={() => this.setTab('categories')}
                >
                    <View style={styles.container}><Text>not implemented yet</Text></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="カート"
                    icon={{uri: this.base64Icon, scale: 2}}
                    selected={this.state.selectedTab === 'cart'}
                    onPress={() => this.setTab('cart')}
                >
                    <View style={styles.container}><Text>not implemented yet</Text></View>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

AppRegistry.registerComponent('MarketApp', () => MarketApp);
