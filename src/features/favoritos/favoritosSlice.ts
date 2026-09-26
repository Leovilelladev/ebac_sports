import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../types/produto'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    alternarFavorito: (state, action: PayloadAction<Produto>) => {
      const index = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index >= 0) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { alternarFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
