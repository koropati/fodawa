import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

class CardComponent extends Component{

	render(){

		const images = {
			"1": require('../assets/feed_images/1.jpg'),
			"2": require('../assets/feed_images/2.jpg'),
			"3": require('../assets/feed_images/3.jpg'),
			"4": require('../assets/feed_images/4.jpg')
		}


		return(
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={require('../assets/me.png')} />
						<Body>
							<Text>{this.props.nama}</Text>
							<Text note>{this.props.nim}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
				</CardItem>
				<CardItem style={{ height: 45}}>
					<Left>
						<Button transparent>
							<Icon name="ios-heart-outline" style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-chatbubbles-outline" style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-send-outline" style={{color:'black'}}/>
						</Button>
					</Left>
				</CardItem>

				<CardItem style={{ height: 20}}>
					<Text>{this.props.likes} Likes</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
							<Text style={{ fontWeight:"900", paddingRight: 10}}>
							Dewok Satria
							</Text>
							Hidup Mahasiswa Tak seharusnya
							Di cemari dengan keseharian
							Begadang, Hemzzz Tapi Mau apa Lagi?
							Mungkin Sudah Takdir Kami :(
						</Text>
					</Body>
				</CardItem>
			</Card>

			);
	}
}

export default CardComponent;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});