import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Feed from './src/components/Feed';

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://image.freepik.com/fotos-gratis/retrato-de-homem-jovem-hippie-barbudo-olhando-para-a-camera-e-tomando-uma-selfie-contra-amarelo_58466-11455.jpg', 
      imgPublicacao: 'http://s2.glbimg.com/GE0QyAn-tw_Zxo_v0PC24z3SQrk=/e.glbimg.com/og/ed/f/original/2016/10/07/22-mr-robot-w529-h352-2x.jpg',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://t2.tudocdn.net/576449?w=660&h=879', 
      imgPublicacao: 'https://tm.ibxk.com.br/2021/08/10/10181827294028.jpg?ims=532x336', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui na empresa, desde o backend ao frontend', 
      imgperfil: 'https://futenews.com/wp-content/uploads/2021/10/Lionel-Messi.jpeg', 
      imgPublicacao: 'https://computerworld.com.br/wp-content/uploads/2016/10/codigo.jpg',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://correio-cdn2.cworks.cloud/fileadmin/_processed_/f/f/csm_Vagner_Schmidt_Alves_vitima_acidente_Salto_dos_Macacos_Parana_ce3fd838f3.jpg', 
      imgPublicacao: 'https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/16_9/ti.jpg', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://sempreupdate.com.br/wp-content/uploads/2019/02/qual-a-diferenca-entre-programador-e-desenvolvedor.jpg', 
      imgPublicacao: 'https://sempreupdate.com.br/wp-content/uploads/2019/02/qual-a-diferenca-entre-programador-e-desenvolvedor.jpg',
      likeada: true, 
      likers: 32
    }
  ])


 return (
  <View style={styles.container}>
    <Header/>

    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={ (item) => item.id }
    data={feed}
    renderItem={ ({ item }) => <Feed data={item} /> }
    />

    <Footer />

  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})

