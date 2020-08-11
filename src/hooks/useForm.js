import { useState } from "react";

//Custom Hook
const useForm = (initialValues) => {
  const [newEntry, setNewEntry] = useState(initialValues);

  const handleOnChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setNewEntry(initialValues);
  };

  return {
    newEntry,
    handleOnChange,
    clearForm,
  };
};

export default useForm;
