import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import FormField from "../../../components/Carousel/components/FormField/FormField";

const RegisterCategory = () => {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };

  const [newCategory, setNewCategory] = useState(initialValues);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const handleOnChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCategoriesArray([...categoriesArray, newCategory]);

    clearForm();
  };

  const clearForm = () => {
    setNewCategory({
      name: "",
      description: "",
      color: "",
    });
  };

  return (
    <PageTemplate>
      <h1>Register Category: {newCategory.name}</h1>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <FormField
          label="Category Name:"
          name="name"
          type="text"
          value={newCategory.name}
          onChange={handleOnChange}
        />

        {/* <div>
          <label>
            Description:
            <textarea
              name="description"
              value={newCategory.description}
              onChange={(e) => handleOnChange(e)}
            ></textarea>
          </label>
        </div> */}

        <FormField
          label="Category Description:"
          type="textarea"
          name="description"
          value={newCategory.description}
          onChange={handleOnChange}
        />

        <FormField
          label="Category Color:"
          type="color"
          name="color"
          value={newCategory.color}
          onChange={handleOnChange}
        />

        <button>Register</button>
      </form>

      <ul>
        {categoriesArray.map((category, index) => {
          return <li key={index}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageTemplate>
  );
};

export default RegisterCategory;