import React, {Component} from 'react';
import {
    StyleSheet,
    NavigatorIOS,
    ListView,
    View,
    Image,
    Text,
    TouchableHighlight,
} from 'react-native';

import ItemDetailsScene from '../ItemDetailsScene';

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

    handleNextPress(selectItem) {
        this.props.navigator.push({
            component: ItemDetailsScene,
            title: selectItem.name,
            passProps: {itemId: selectItem.id}
        })
    }

    renderRow(rowData) {
        return (
            <TouchableHighlight
                onPress={() => this.handleNextPress({id: rowData.id, name: rowData.name})}
                underlayColor="#ddd"
            >
                <View style={styles.cell}>
                    <View>
                        <Image
                            resizeMode='contain'
                            style={styles.itemImage}
                            source={{uri: rowData.image_url}}
                        />
                    </View>
                    <View>
                        <Text>{rowData.name}</Text>
                        <Text>{rowData.price}円</Text>
                        <Text>{rowData.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
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
    },
    cell: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 12,
        marginLeft: 12,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    itemImage: {
        width: 80,
        height: 80,
        backgroundColor: '#fafaf4',
    },
});
