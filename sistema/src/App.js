import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";//componente

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {
              //Os caminhos (path) devem ser organizados do mais específico para o mais geral
            }
            <Route path="/clientes" element={<TelaCadastroCliente />} />
            <Route path="/produtos" element={<TelaCadastroProduto />} />
            <Route path="/" element={<TelaMenu />} />
            {
              //... demais telas de cadastro
            }
            <Route path="*" element={<Tela404 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;