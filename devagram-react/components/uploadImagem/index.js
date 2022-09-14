import { useRef } from 'react'

export function UploadImagem({
  className = '',
  setImagem,
  imagemPreview,
  imagemPreviewClassName = ''
}) {
  const referenciaInput = useRef(null)
  const abrirSeletorArquivos = () => {
    referenciaInput?.current?.click()
  }

  const aoAlterarImagem = () => {
    if (!referenciaInput?.current?.files?.length) {
      return
    }

    const arquivo = referenciaInput?.current?.files[0]
    const fileReader = new FileReader()
    fileReader.readAsBinaryString(arquivo)
    fileReader.onloadend = () => {
      setImagem({
        preview: fileReader.result,
        arquivo
      })
    }
  }

  return (
    <div
      className={`uploadImagemContainer ${className}`}
      onClick={abrirSeletorArquivos}
    >
      <button>Abrir seletor de arquivos</button>
      {imagemPreview && (
        <div className="imagemPreviewContainer">
          <img
            src={imagemPreview}
            alt="imagem preview"
            className={imagemPreviewClassName}
          />
        </div>
      )}
      <input
        type="file"
        className="oculto"
        accept="image/*"
        ref={referenciaInput}
        onChange={aoAlterarImagem}
      />
    </div>
  )
}
