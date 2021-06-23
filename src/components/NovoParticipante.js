import React, { useState } from "react";
import { LeilaoApi } from "../services/LeilaoApi"

const API = LeilaoApi.Participantes;

const NovoParticipante = () => {

    const estadoInicialParticipante = {
        id: null,
        cpf: "",
        nome: ""
    };

    const [participante, setParticipante] = useState(estadoInicialParticipante);
    const [submeter, setSubmeter] = useState(false);

    const tratarCampo = (event) => {
        const { name, value } = event.target;
        setParticipante({...participante, [name]: value});
    }

    const novo = () => {
        setParticipante(estadoInicialParticipante);
        setSubmeter(false);
    }

    const cadastrarParticipante = () => {
        let data = {
            cpf: participante.cpf,
            nome: participante.nome
        };

        API.criar(data)
            .then(response => {
                setParticipante({
                    id: response.data.id,
                    cpf: response.data.cpf,
                    nome: response.data.nome
                });
                setSubmeter(true);
            }).catch(e => console.log(e));
    }

    return (
        <div className="submit-form">
            {submeter ? (
                <div>
                    <h4>Livro cadastrado com sucesso!</h4>
                    <button className="btn btn-success" onClick={novo}>Novo</button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            required
                            value={participante.nome}
                            onChange={tratarCampo}
                            name="nome"
                        />
                    </div>
                     <div className="form-group mt-4">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            required
                            value={participante.cpf}
                            onChange={tratarCampo}
                            name="cpf"
                        />
                    </div>
                    <button onClick={cadastrarParticipante} className="btn btn-success mt-4">Cadastrar</button>
                </div>
            )}
            
        </div>
    );
};

export default NovoParticipante;