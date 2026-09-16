// Componente que recebe um aluno via props e mostra os dados dele.
function Livro(props) {
  return (
    <li>
      {props.livro.titulo} — {props.livro.autor} — {props.livro.ano} —{" "}
      {props.livro.genero}
    </li>
  );
}

export default Livro;

