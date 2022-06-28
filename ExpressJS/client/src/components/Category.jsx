import React from "react";

const Category = (props) => {
  return (
    <div className="listItems">
        <h2>Liste des catégories</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {props.categories.map((category) =>
          <tr key={category._id}>
            <td>{category.name}</td>
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

export default Category;
