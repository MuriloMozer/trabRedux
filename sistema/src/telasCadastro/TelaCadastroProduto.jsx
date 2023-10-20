import { useState } from "react";
import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";

export default function TelaCadastroProduto(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
 
  const [produtoParaEdicao, setProdutoParaEdicao] = useState({
    id: "",
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
  });
  const [modoEdicao, setModoEdicao] = useState(false);

    return (
      <Container>
        <Pagina>
          {exibirFormulario ? (
            <FormCadProduto
              exibirFormulario={setExibirFormulario}
              produtoParaEdicao={produtoParaEdicao}
              setProdutoParaEdicao={setProdutoParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          ) : (
            <TabelaProdutos
              exibirFormulario={setExibirFormulario}
              produtoParaEdicao={produtoParaEdicao}
              setProdutoParaEdicao={setProdutoParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
          )}
        </Pagina>
      </Container>
    );
}
