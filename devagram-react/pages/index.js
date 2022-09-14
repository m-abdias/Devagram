import { useState } from 'react'
import Avatar from '../components/avatar'
import Botao from '../components/botao'
import { UploadImagem } from '../components/uploadImagem'

export default function Home() {
  const [imagem, setImagem] = useState(null)

  console.log(imagem)

  return (
    <>
      <h1>Olá Mundo</h1>
      <UploadImagem setImagem={setImagem} imagemPreview={imagem?.preview}/>
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
