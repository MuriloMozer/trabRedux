import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { adicionar, atualizar} from '../../redux/categoriaReducer';

export default function FormCadCategoria(props) {

    const categoriaVazia = {
        nome: '',
        descricao: '',
        subcategoria: '',
    }
    const estadoInicialCategoria = props.categoriaParaEdicao;
    const [categoria, setCategoria] = useState(estadoInicialCategoria);
    const [formValidado, setFormValidado] = useState(false);
    const {status,mensagem,listaCategorias} = useSelector((state)=>state.categoria);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                dispatch(adicionar(categoria));
            } else {
                dispatch(atualizar(categoria));
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazia);
            }
            setCategoria(categoriaVazia);
            setFormValidado(false);
        } else {
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
                            <FloatingLabel label="Nome da Categoria" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={categoria.nome}
                                    onChange={manipularMudancas}
                                    required
                                />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">
                                Informe o nome!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label="Descrição" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="descricao"
                                    value={categoria.descricao}
                                    onChange={manipularMudancas}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel label="Subcategoria" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="subcategoria"
                                    value={categoria.subcategoria}
                                    onChange={manipularMudancas}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end"> {/* Alterado 'flex' para 'd-flex' */}
                        <Button type="submit" variant="primary">{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant="secondary" onClick={() => {
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
