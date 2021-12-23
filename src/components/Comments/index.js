import React, {useRef, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import {Span, Name} from './style';

export default function Comments({closeModal, data}) {
  
 return (
   <View style={styled.container}>
       <View style={styled.areaTop}>

           <View style={styled.areaComment}>
               <TouchableOpacity onPress={closeModal}>
                    <Image 
                    source={require('../../img/arrow.png')}
                    style={styled.arrow}
                    />
               </TouchableOpacity>

                <Text style={styled.comments}>Comentários</Text>
           </View>

            <TouchableOpacity>
                    <Image 
                    source={require('../../img/send.png')}
                    style={styled.send}
                    />
            </TouchableOpacity> 
       </View>

       <View style={styled.areaUser}>
           <Image 
            source={{uri: data.data.imgperfil}}
            style={styled.fotoPerfil}
           />

           <Name> {data.data.nome} <Span> {data.data.descricao} </Span>  </Name>
       </View>

       <View style={styled.commentsFeed}>
           <View style={styled.userComments}> 
            <Image 
                source={{uri: data.data.imgperfil}}
                style={styled.fotoPerfil}
            />

            <Name> {data.data.nome} <Span> {data.data.descricao} </Span>  </Name>
           </View>

           <View style={styled.areaInfos}>
                <Text style={styled.textInfo}>5 min</Text>
                <Text style={styled.textInfo1}>Curtidas 20</Text>
                <Text style={styled.textInfo1}>Responder</Text>
           </View>
       </View>

       <View style={styled.commentsFeed}>
           <View style={styled.userComments}> 
            <Image 
                source={{uri: data.data.imgperfil}}
                style={styled.fotoPerfil}
            />

            <Name> {data.data.nome} <Span> {data.data.descricao} </Span>  </Name>
           </View>

           <View style={styled.areaInfos}>
                <Text style={styled.textInfo}>5 min</Text>
                <Text style={styled.textInfo1}>Curtidas 20</Text>
                <Text style={styled.textInfo1}>Responder</Text>
           </View>
       </View>

       <View style={styled.areaBottom}>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                source={{uri: data.data.imgperfil}}
                style={styled.fotoPerfilComment}
                />

                <TextInput 
                placeholder='Escreva seu comentário'
                style={styled.input}
                />
            </View>

            <TouchableOpacity>
                <Text>Publicar</Text>
            </TouchableOpacity>

       </View>
   </View>
  );
}

const styled = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    areaTop: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2
    },

    areaComment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    arrow:{
        width: 40,
        height: 40,
        marginRight: 20
    },

    send:{
        width: 33,
        height: 33
    },

    comments:{
        fontSize: 17,
        fontWeight: 'bold'
    },

    fotoPerfil:{
        width: 45,
        height: 45,
        borderRadius: 22
    },

    fotoPerfilComment:{
        width: 35,
        height: 35,
        borderRadius: 17
    },

    areaUser:{
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        

        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    },

    commentsFeed: {

    },

    userComments: {
        padding: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },

    areaInfos: {
        paddingLeft: 65,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textInfo: {
        color: '#696969'
    },

    textInfo1: {
        marginLeft: 20,
        color: '#696969'
    },

    areaBottom:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5
    },

    input:{
        paddingLeft: 15,
        width: 290,
    }
});