import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/produtosApi'
import { GlobalStyle } from './styles'

function App() {
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading ? (
          <p role="status">Carregando produtos...</p>
        ) : isError ? (
          <p role="alert">Não foi possível carregar os produtos.</p>
        ) : (
          <Produtos produtos={produtos} />
        )}
      </div>
    </>
  )
}

export default App
