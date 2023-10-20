import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const produtoSlice = createSlice({
    name:'produto',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaProdutos:[]
    },
    reducers:{
      
        adicionar:(state, action)=>{
            state.listaProdutos.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaProdutos = state.listaProdutos.filter(produto => produto.id !== action.payload.id);
        },
        atualizar:(state,action)=>{

            const listaTemporariaProdutos = state.listaClientes.filter(produto => produto.id !== action.payload.id);
            state.listaProdutos = [...listaTemporariaProdutos, action.payload.produto];
        }

    }
});

export const {adicionar,remover,atualizar} = produtoSlice.actions; 

export default produtoSlice.reducer;