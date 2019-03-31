import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import likeImg from '../img/like.png';
import likedImg from '../img/likeada.png';

export default class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: this.props.data
    };


  }

  render() {
    const { profileImg, name, publicationImg, liked } = this.state.feed;

    const loadIcon = (liked) => {
      return liked ? likeImg : likedImg;
    };

    const like = (liked) =>{
      let state = this.state;
      state.feed.liked = !liked;
      this.setState(state);
    };

    return (
      <View style={styles.feedArea}>
        <View style={styles.profileView}>
          <Image style={styles.profilePhoto} source={{ uri: profileImg }} />
          <Text style={styles.userName} >{name}</Text>
        </View>
        
        <Image style={styles.publicationPhoto} resizeMode='cover' source={{ uri: publicationImg }} />

        <View style={styles.btnArea}>
          <TouchableOpacity onPress={() => like(liked)}>
            <Image source={loadIcon(liked)} style={styles.likeIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  feedArea: {
    marginBottom: 10
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  userName: {
    fontSize: 22,
    color: '#000000',
    textAlign: 'left',
    paddingLeft: 8
  },
  publicationPhoto: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  btnArea: {
    flexDirection: 'row',
    padding: 5
  },
  likeIcon: {
    width: 33,
    height: 33
  }
});


