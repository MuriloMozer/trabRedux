import { useState} from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./Formularios/formCadCliente";
import TabelaClientes from "./tabelas/tabelaCliente";
import { Container } from "react-bootstrap";
import TelaMensagem from "./telaMensagem";

export default function TelaCadastroCliente(props){
  const [exibirFormulario, setExibirFormulario] = useState(false);
  //const [listaClientes, setListaClientes] = useState([]);
  const [clienteParaEdicao, setClienteParaEdicao] = useState({
      cpf:'',
      nome:'',
      endereco:'',
      numero:'',
      bairro:'',
      cidade:'',
      uf:'SP',
      cep:''
  });
  const [modoEdicao, setModoEdicao] = useState(false);
  return(
      <Container>
          <Pagina>
              {
                  //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                  //dos registros já cadastrados
                  exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} 
                  modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/> :
                                    <TabelaClientes exibirFormulario={setExibirFormulario} clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} 
                                    modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}/>
              }
          </Pagina>
      </Container>
  )
}