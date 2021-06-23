import React, { useState, useEffect } from "react";
import { LeilaoApi } from "../services/LeilaoApi"

const API = LeilaoApi.Participantes;

const EditarParticipante = (props) => {

    const estadoInicialParticipante = {
        id: null,
        cpf: "",
        nome: ""
    };

    const [participante, setParticipante] = useState(estadoInicialParticipante);
    const [msg, setMsg] = useState("");

    const buscarParticipante = (id) => {
        API.buscarPorId(id)
            .then(response => {
                setParticipante(response.data);
            }).catch(e => console.log(e));
    }
    
    useEffect(() => buscarParticipante(props.match.params.id), [props.match.params.id]);

    const tratarCampo = (event) => {
        const { name, value } = event.target;
        setParticipante({...participante, [name]: value});
    }

    const atualizarParticipante = () => {
        API.atualizar(participante.id, participante)
            .then(response => {
                setMsg("Dados do participante atualizados com sucesso!!");
            }).catch(e => console.log(e));
    }

    const deletarParticipante = () => {
        API.deletar(participante.id)
            .then(response => {
                setMsg("Participante excluído com sucesso!!");
                props.history.push("/participantes");
            }).catch(e => console.log(e));
    }

    return (
        <div>
            {participante ? (
                <div className="edit-form">
                    <h4>Participante</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                name="nome"
                                value={participante.nome}
                                onChange={tratarCampo}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                value={participante.cpf}
                                onChange={tratarCampo}
                            />
                        </div>
                    </form>
                    <button className="btn btn-warning danger mt-3" onClick={deletarParticipante}>Excluir</button>
                    <button type="submit" className="btn btn-success mt-3 mx-3" onClick={atualizarParticipante}>Atualizar</button>
                    <br/>
                    <br/>
                    <p>{msg}</p>
                </div>
            ) : (
                <div>
                    <br/>
                    <p>Selecione um participante...</p>
                </div>
            )}
        </div>
    );
};

export default EditarParticipante;