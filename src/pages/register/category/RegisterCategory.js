import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import FormField from "../../../components/FormField/FormField";
import Button from "../../../components/Button/Button";

import useForm from "../../../hooks/useForm";

import categoriesRepository from "../../../repositories/categories";

const RegisterCategory = () => {
  const history = useHistory();

  const initialValues = {
    name: "",
    description: "",
    color: "",
  };

  //Custom Hook
  const { newEntry, handleOnChange, clearForm } = useForm(initialValues);

  const [categoriesArray, setCategoriesArray] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // setCategoriesArray([...categoriesArray, newEntry]);
    categoriesRepository.registerCategory(newEntry).then(() => {
      history.push("/");
    });

    clearForm();
  };

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categories"
      : "https://react-techflix.herokuapp.com/categories";
    fetch(URL).then(async (response) => {
      const res = await response.json();
      // console.log(res);
      setCategoriesArray([...res]);
    });
  }, []);

  return (
    <PageTemplate currentLocation={"category"}>
      <h1>Register Category: {newEntry.name}</h1>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <FormField
          label="Category Name:"
          name="name"
          type="text"
          value={newEntry.name}
          onChange={handleOnChange}
        />

        <FormField
          label="Category Description:"
          type="textarea"
          name="description"
          value={newEntry.description}
          onChange={handleOnChange}
        />

        <FormField
          label="Category Color:"
          type="color"
          name="color"
          value={newEntry.color}
          onChange={handleOnChange}
        />

        <Button>Register</Button>
      </form>

      <ul>
        {categoriesArray.map((category, index) => {
          return <li key={index}>{category.name}</li>;
        })}
      </ul>

      <div style={{ margin: "1rem 0" }}>
        <Link to="/">Home</Link>
      </div>
    </PageTemplate>
  );
};

export default RegisterCategory;
