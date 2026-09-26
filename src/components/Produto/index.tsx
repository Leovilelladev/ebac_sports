import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { adicionarProduto } from '../../features/carrinho/carrinhoSlice'
import { alternarFavorito } from '../../features/favoritos/favoritosSlice'
import type { Produto as ProdutoType } from '../../types/produto'
import * as S from './styles'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: ProdutoType
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useAppDispatch()
  const estaNosFavoritos = useAppSelector((state) =>
    state.favoritos.itens.some((item) => item.id === produto.id)
  )
  const estaNoCarrinho = useAppSelector((state) =>
    state.carrinho.itens.some((item) => item.id === produto.id)
  )

  const favoritar = () => dispatch(alternarFavorito(produto))

  const adicionarAoCarrinho = () => {
    if (estaNoCarrinho) {
      window.alert('Item já adicionado')
      return
    }

    dispatch(adicionarProduto(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
