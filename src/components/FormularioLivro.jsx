import { useState } from "react";
import CampoTexto from "./CampoTexto";
import Livro from "./Livro";
import "./FormularioLivro.css";

function FormularioLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  const [livros, setLivros] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    const novoLivro = { id: Date.now(), titulo, autor, ano, genero }
    setLivros([...livros, novoLivro])

    setTitulo('')
    setAutor('')
    setAno('')
    setGenero('')
  }

  return (
    <section className="formulario-livro">
      <h1>Cadastro de Livros</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Título"
          name="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ex: tau Livro"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Ex: fulano de tau"
        />

        <CampoTexto
          label="Ano de publicação"
          name="ano"
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Ex: ano tau"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          placeholder="Ex: Natau"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-aluno-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro key={livro.id} livro={livro} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioLivro;
