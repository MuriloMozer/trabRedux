import { useState } from "react";
import Pagina from "../templates/Pagina";
import FormCadCategoria from "./formularios/FormCadCategoria";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { Container } from "react-bootstrap";
import TelaMensagem from "./TelaMensagem";

export default function TelaCadastroCategorias(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        nome:'',
        descricao:'',
        subcategoria:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);

    return(
        <Container>
            <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFormulario ? <FormCadCategoria exibirFormulario={setExibirFormulario}
                    categoriaParaEdicao={categoriaParaEdicao}
                    setCategoriaParaEdicao={setCategoriaParaEdicao}
                    modoEdicao={modoEdicao}
                    setModoEdicao={setModoEdicao}
                    />
                    :
                        <TabelaCategorias exibirFormulario={setExibirFormulario}
                        categoriaParaEdicao={categoriaParaEdicao}
                        setCategoriaParaEdicao={setCategoriaParaEdicao}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        />
            }
            </Pagina>
        </Container>
    )
}