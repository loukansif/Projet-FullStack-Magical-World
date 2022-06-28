import React from "react";

const Home = (props) => {
  return (
    <div className="listItems">
        <h2>Liste des jouets</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
        {props.toys.map((toy) =>
          <tr key={toy._id}>
            <td>{toy.name}</td>
            <td>{toy.description}</td>
            <td>{toy.price}</td>
            <td>{toy.category}</td>
            <td>
              <a href="https://google.com">Modifier</a>
            </td>
            <td>
              <a href="https://google.com">Supprimer</a>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
