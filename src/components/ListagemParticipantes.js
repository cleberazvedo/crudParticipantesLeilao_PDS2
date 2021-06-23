import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LeilaoApi } from "../services/LeilaoApi"

const API = LeilaoApi.Participantes;

const ListagemParticipantes = () => {

    const [participantes, setParticipantes] = useState([]);
    const [participanteSelecionado, setParticipanteSelecionado] = useState(null);
    const [indexAtual, setIndexAtual] = useState(-1);

    useEffect(() => buscarParticipantes());

    const buscarParticipantes = () => {
        API.buscarTodos()
            .then(response => {
                setParticipantes(response.data);
            }).catch(e => console.log(e));
    }

    const participanteAtual = (participante, index) => {
        setParticipanteSelecionado(participante);
        setIndexAtual(index);
    }

    return (
        <div className="container list row">
            <div className="col-md-6">
                <h4>Participantes</h4>
                <ul className="list-group py-1">
                    {participantes &&
                        participantes.map((participante, index) => (
                            <li  
                                className={"list-group-item " + (index === indexAtual ? "active" : "")}
                                 onClick={() => participanteAtual(participante, index)}
                                 key={index}
                            >
                                {participante.nome}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {participanteSelecionado ? (
                    <div>
                        <h4>Detalhe</h4>
                        <div>
                            <label>
                                <strong>Nome:</strong>
                            </label>{" "}
                            {participanteSelecionado.nome}
                        </div>
                        <div>
                            <label>
                                <strong>CPF:</strong>
                            </label>{" "}
                            {participanteSelecionado.cpf}
                        </div>

                        <Link to={"/participantes/" + participanteSelecionado.id} className="btn btn-warning">Editar</Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escolha um participante...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListagemParticipantes;