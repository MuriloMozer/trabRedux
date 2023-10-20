import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';
import { adicionar, atualizar} from '../../redux/fornecedorReducer';

export default function FormCadFornecedor(props) {
  const fornecedorVazio = {
    cnpj: '',
    razaoSocial: '',
    endereco:'',
    numero: '',
    bairro: '',
    cidade: '',
    uf: 'SP',
    cep: '',
  };
  const estadoInicialFornecedor = props.fornecedorParaEdicao;
  const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
  const [formValidado, setFormValidado] = useState(false);
  const dispatch = useDispatch();

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setFornecedor({ ...fornecedor, [componente.name]: componente.value });
  }

  function manipularSubmissao(e){
    const form = e.currentTarget; 
    if (form.checkValidity()){
        if(!props.modoEdicao){
            dispatch(adicionar(fornecedor));
        }
        else{
            dispatch(atualizar(fornecedor));
            props.setModoEdicao(false);
            props.setFornecedorParaEdicao(fornecedorVazio);                
        }
        setFornecedor(fornecedorVazio); // ou sair da tela de formulário 
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
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="CNPJ:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="00.000.000/0000-00"
                  id="cnpj"
                  name="cnpj"
                  value={fornecedor.cnpj}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o CNPJ!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Razão Social:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe a razão social"
                  id="razaoSocial"
                  name="razaoSocial"
                  value={fornecedor.razaoSocial}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a razão social!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Group>
              <FloatingLabel label="Endereço:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Avenida/Rua/Alameda/Viela ..."
                  id="endereco"
                  name="endereco"
                  onChange={manipularMudancas}
                  value={fornecedor.endereco}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o endereço!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group>
              <FloatingLabel label="Número" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Nº"
                  id="numero"
                  name="numero"
                  onChange={manipularMudancas}
                  value={fornecedor.numero}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o número!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel label="Bairro:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Bairro/Vila..."
                  id="bairro"
                  name="bairro"
                  onChange={manipularMudancas}
                  value={fornecedor.bairro}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o bairro!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group>
              <FloatingLabel label="Cidade" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cidade"
                  id="cidade"
                  name="cidade"
                  onChange={manipularMudancas}
                  value={fornecedor.cidade}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a cidade!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>
            <FloatingLabel controlId="floatingSelect" label="UF:">
              <Form.Select
                aria-label="Unidades Federativas brasileiras"
                id="uf"
                name="uf"
                onChange={manipularMudancas}
                value={fornecedor.uf}
                required>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group>
              <FloatingLabel label="CEP:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="00000-000"
                  id="cep"
                  name="cep"
                  onChange={manipularMudancas}
                  value={fornecedor.cep}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o CEP!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
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
