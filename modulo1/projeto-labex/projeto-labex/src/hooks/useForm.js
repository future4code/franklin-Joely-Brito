import { useState } from "react";

const useForm = (InitialState) => {
  const [form, setForm] = useState(InitialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};
export default useForm;
