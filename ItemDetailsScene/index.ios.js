import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

export default class ItemDetailsScene extends Component {
    static propTypes = {
        itemId: PropTypes.number.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            item: {
                name: "",
                price: 0,
                description: "",
                image_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=',
            }
        }
    }

    loadItemDetails() {
        fetch("http://localhost:3000/items/" + this.props.itemId + ".json")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    item: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.loadItemDetails();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image
                        resizeMode='contain'
                        style={styles.itemImage}
                        source={{uri: this.state.item.image_url}}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>{this.state.item.name}</Text>
                    <Text>{this.state.item.price}円</Text>
                </View>
                <View>
                    <Text>{this.state.item.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        padding: 12,
    },
    itemImage: {
        width: 300,
        height: 200,
        backgroundColor: '#fafaf4',
        alignSelf: 'center',
    },
});
