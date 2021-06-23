import http from './clientHttp';

const urlParticipante = '/participante';

export const LeilaoApi = {

  Participantes: {

    buscarTodos: () => http.get(urlParticipante),

    buscarPorId: id => http.get(`${urlParticipante}/${id}`),

    criar: data => http.post(urlParticipante, data),

    atualizar: (id, data) => http.put(`${urlParticipante}/${id}`, data),

    deletar: id => http.delete(`${urlParticipante}/${id}`),
  },

};
