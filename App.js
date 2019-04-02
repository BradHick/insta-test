
import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';

import List from './src/Components/List';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      feed: [
        {id: '1', name: 'Lucas Silva', description: 'Mais um dia de muitos bugs :)', profileImg: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', publicationImg: 'https://sujeitoprogramador.com/instareact/foto1.png',  liked: false, likers: 0},
        {id: '2', name: 'Matheus', description: 'Isso sim é ser raiz!!!!!', profileImg: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', publicationImg: 'https://sujeitoprogramador.com/instareact/foto2.png', liked: false, likers: 0},
        {id: '3', name: 'Jose Augusto', description: 'Bora trabalhar Haha', profileImg: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', publicationImg: 'https://sujeitoprogramador.com/instareact/foto3.png',  liked: false, likers: 3},
        {id: '4', name: 'Gustavo Henrique', description: 'Isso sim que é TI!', profileImg: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', publicationImg: 'https://sujeitoprogramador.com/instareact/foto4.png', liked: false, likers: 1},
        {id: '5', name: 'Guilherme', description: 'Boa tarde galera do insta...', profileImg: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', publicationImg: 'https://sujeitoprogramador.com/instareact/foto5.png', liked: false, likers: 32}
      ]
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          renderItem={ ({ item }) => <List data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
});
