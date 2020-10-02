import { ADD_LUGAR, LISTA_LUGARES } from "./lugares-action";
import Lugar from '../modelo/Lugar';

const estadoInicial = {
  lugares: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case ADD_LUGAR:
      const l = new Lugar (action.dadosLugar.id.toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagemURI);
      return {
        lugares: estado.lugares.concat(l)
      }
    case LISTA_LUGARES:
      return{
        lugares: action.lugares.map(l => Lugar(l.id.toString(), l.nomeLugar, l.imagem))
      }
    default:
      return estado;
  }
}

export const buscarLugares = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
      'SELECT * FROM tb_lugar',
      [],
      (_, resultado) => { resolve(resultado) },
      (_, err) => { reject(err) }
      );
    });
  });
  return promise;
};