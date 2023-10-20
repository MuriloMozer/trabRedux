import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';
import { adicionar, atualizar} from '../../redux/produtoReducer';

export default function FormCadProduto(props) {
  // Definição do estado inicial do produto
  const produtoVazio = {
    id: "",
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
  };

  const estadoInicialProduto = props.produtoParaEdicao;
  const [produto, setProduto] = useState(estadoInicialProduto);
  const [formValidado, setFormValidado] = useState(false);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setProduto({ ...produto, [componente.name]: componente.value });
  }

  function manipularSubmissao(e){
    const form = e.currentTarget; 
    if (form.checkValidity()){
        if(!props.modoEdicao){
            dispatch(adicionar(produto));
        }
        else{
            dispatch(atualizar(produto));
            props.setModoEdicao(false);
            props.setProdutoParaEdicao(produtoVazio);                
        }
        setProduto(produtoVazio); // ou sair da tela de formulário 
        setFormValidado(false);
    }
    else{
        setFormValidado(true);
    }

    e.stopPropagation();
    e.preventDefault();
}



  return (
    <Container>
      <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        {/* Campo de ID */}
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="ID do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="ID do produto"
                  id="id"
                  name="id"
                  value={produto.id}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o ID do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Campo de Nome */}
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Nome do produto"
                  id="nome"
                  name="nome"
                  value={produto.nome}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Campo de Descrição */}
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Descrição:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Descrição do produto"
                  id="descricao"
                  name="descricao"
                  value={produto.descricao}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Campo de Preço */}
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Preço:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Preço do produto"
                  id="preco"
                  name="preco"
                  value={produto.preco}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Campo de Estoque */}
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Estoque:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Estoque do produto"
                  id="estoque"
                  name="estoque"
                  value={produto.estoque}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o estoque do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        {/* Botões de submit e voltar */}
        <Row>
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              {props.modoEdicao ? "Alterar" : "Cadastrar"}
            </Button>
          </Col>
          <Col md={6} offset={5}>
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                props.exibirFormulario(false);
              }}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
