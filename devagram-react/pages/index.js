import Avatar from '../components/avatar'
import Botao from '../components/botao'

export default function Home() {
  return (
    <>
      <h1>Olá Mundo</h1>
      <div style={{ width: 200 }}>
        <Avatar />
        <Botao
          texto={'login'}
          cor="invertido"
          manipularClique={() => console.log('botão clicado')}
        />
      </div>
    </>
  )
}
