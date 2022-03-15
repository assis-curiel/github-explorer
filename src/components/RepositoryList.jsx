import { RepositoryItem } from "./RepositoryItem";

const repositoryName = "unform2";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository="unform2" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
