import React, {Component} from 'react';
import {
    StyleSheet,
    NavigatorIOS,
    ListView,
    Text,
    View
} from 'react-native';

export default class RecommendItemsScene extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navContainer}
                initialRoute={{
                    component: RecommendItemsList,
                    title: 'おすすめ',
                }}
            />
        );
    }
}

class RecommendItemsList extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows([])
        }
    }

    loadItems() {
        fetch("http://localhost:3000/items/recommended.json")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson)
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadItems();
    }

    renderRow(rowData) {
        return (
            <View style={styles.cell}>
                <Text>{rowData.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 12,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 44,
    }
});
