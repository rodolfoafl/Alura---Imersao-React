import React, { useEffect, useState } from "react";

import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import { Link, useHistory } from "react-router-dom";

import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button/Button";
import FormField from "../../../components/FormField/FormField";

import videosRepository from "../../../repositories/videos";
import categoriesRepository from "../../../repositories/categories";

const RegisterVideo = () => {
  const history = useHistory();

  const [categories, setCategories] = useState([]);
  const [categoriesNames, setCategoriesNames] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategories().then((response) => {
      setCategories(response);
      setCategoriesNames(response.map(({ name }) => name));
    });
  }, []);

  const initialValues = {
    name: "",
    description: "",
    categoryId: 1,
    url: "",
  };

  const { newEntry, handleOnChange, clearForm } = useForm(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const selectedCategory = categories.find((category) => {
      return category.name === newEntry.category;
    });

    if (selectedCategory === null || selectedCategory === undefined) {
      return alert("Invalid Category selected!");
    }

    newEntry.categoryId = selectedCategory.id;
    videosRepository.registerVideo(newEntry).then(() => {
      history.push("/");
    });

    clearForm();
  };

  return (
    <PageTemplate currentLocation={"video"}>
      <h1>Register Video</h1>

      <form onSubmit={(e) => handleFormSubmit(e)}>
        <FormField
          label="Video Title:"
          name="name"
          type="text"
          value={newEntry.name}
          onChange={handleOnChange}
        />

        <FormField
          label="Video Category:"
          name="category"
          type="text"
          value={newEntry.category}
          onChange={handleOnChange}
          suggestions={categoriesNames}
        />

        <FormField
          label="Video Description:"
          type="textarea"
          name="description"
          value={newEntry.description}
          onChange={handleOnChange}
        />

        <FormField
          label="Video URL:"
          type="text"
          name="url"
          value={newEntry.url}
          onChange={handleOnChange}
        />

        <Button>Register</Button>
      </form>

      <div style={{ margin: "1rem 0" }}>
        <Link to="/register/category">Register Category</Link>
      </div>
    </PageTemplate>
  );
};

export default RegisterVideo;
