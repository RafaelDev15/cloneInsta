import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Comments from '../Comments';

export default function Feed(props){

    const [like, setLike] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleLike(){
        setLike(!like);
    }

    function handleModal(){
        setShowModal(!showModal);
    }

 /*function carregaIcone(likeada){
    return likeada > 1 ? require('../../img/likeada.png') :
    require('../../img/like.png')
  }*/

  return(
    <View>
      <View style={styles.viewPerfil}>
        <Image
        source={{uri: props.data.imgperfil}}
        style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
      resizeMode="cover"
      source={{uri: props.data.imgPublicacao}}
      style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handleLike}>
            <Image
            source={ like ? require('../../img/likeada.png') : require('../../img/heart.png') }
            style={styles.iconeLike}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleModal} style={styles.btnsend}>
            <Image
            source={require('../../img/comment.png')}
            style={styles.iconeLike}
            />
          </TouchableOpacity>       

          <TouchableOpacity style={styles.btnsend}>
            <Image
            source={require('../../img/send.png')}
            style={styles.iconeLike}
            />
          </TouchableOpacity>           
        </View>

        <TouchableOpacity style={styles.btnsend}>
            <Image
            source={require('../../img/bookmark.png')}
            style={styles.iconeLike}
            />
          </TouchableOpacity>   
        
      </View>
     
      <Text style={styles.descRodape}>
        {props.data.descricao}
      </Text>

    <Modal transparent={true} animationType='slide' visible={showModal} >
        <Comments data={props} closeModal={ () => setShowModal(false) } />
    </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding:8
  },
  fotoPerfil:{
    width: 40,
    height: 40,
    borderRadius: 25
  },
  nomeUsuario:{
    paddingLeft: 5,
    fontSize: 17,
    color: '#000'
  },
  fotoPublicacao:{
    height: 400,
    alignItems: 'center'
  },
  areaBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 10
  },
  iconeLike:{
    width: 25,
    height: 25
  },
  btnsend:{
    paddingLeft: 15
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  descRodape:{
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 15
  }

});