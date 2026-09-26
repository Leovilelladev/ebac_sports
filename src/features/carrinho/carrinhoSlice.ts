import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types/produto'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.some((item) => item.id === action.payload.id)) {
        state.itens.push(action.payload)
      }
    },
    removerProduto: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarProduto, removerProduto, limparCarrinho } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
