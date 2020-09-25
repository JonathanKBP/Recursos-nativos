import React from 'react';

import {
  View,
  StyleSheet,
  Text, 
  Platform,
  FlatList
} from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';
import Lugar from '../modelo/Lugar';

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector(estado => estado.lugares.lugares)
  return (
    <FlatList
      data={lugares}
      keyExtractor={lugar => lugar.id}
      renderItem={lugar => {
      return <Text>{JSON.stringify(lugar)}</Text>
      }}
    />
  )
}

ListaDeLugaresTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de lugares",
    headerRight: 
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}
      >
      <Item 
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => dadosNavegacao.navigation.navigate ('NovoLugar')}
      />
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({

});

export default ListaDeLugaresTela;