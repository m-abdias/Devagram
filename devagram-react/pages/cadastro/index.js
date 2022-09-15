import Image from 'next/image'
import Link from 'next/link'
import Botao from '../../components/botao'
import InputPublico from '../../components/inputPublico'

import imagemLogo from '../../public/images/logo.svg'
import imagemUsuarioAtivo from '../../public/images/usuarioAtivo.svg'
import imagemEnvelope from '../../public/images/envelope.svg'
import imagemChave from '../../public/images/chave.svg'

export default function Cadastro() {
  return (
    <section className={`paginaCadastro paginaPublica`}>
      <div className="logoContainer">
        <Image src={imagemLogo} alt="logotipo" layout="fill" className="logo" />
      </div>
      <div className="conteudoPaginaPublica">
        <form>
          <InputPublico
            imagem={imagemUsuarioAtivo}
            texto="Nome Completo"
            tipo="text"
            aoAlterarValor={e => console.log(e.target.value)}
            // valor={email}
          />
          <InputPublico
            imagem={imagemEnvelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={e => console.log(e.target.value)}
            // valor={email}
          />
          <InputPublico
            imagem={imagemChave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={e => console.log(e.target.value)}
            // valor={senha}
          />
          <InputPublico
            imagem={imagemChave}
            texto="Confirmar Senha"
            tipo="password"
            aoAlterarValor={e => console.log(e.target.value)}
            // valor={senha}
          />
          <Botao texto="Cadastrar" tipo="submit" desabilitado={false} />
        </form>
        <div className="rodapePaginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/">Faça seu login agora!</Link>
        </div>
      </div>
    </section>
  )
}
