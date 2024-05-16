import React, { useState } from "react";
import { callVapi } from "../utils/vapi";

type FormProps = {
  prompt: string;
  textTuning: string;
  textEnd: string;
  textStart: string;
  textVoicemail: string;
  phoneForwarding: string;
  btnColor?: string;
};

const Form = ({
  prompt,
  textTuning,
  textEnd,
  textStart,
  textVoicemail,
  phoneForwarding,
  btnColor,
}: FormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  console.log(btnColor);
  const { name, phone } = formData;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    callVapi(
      name,
      phone,
      setError,
      prompt,
      textStart,
      textTuning,
      textEnd,
      textVoicemail,
      phoneForwarding
    );
    setTimeout(() => {
      setLoading(false);
      setSuccess("Llamada realizada con éxito");
      setFormData({
        name: "",
        phone: "",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <form
      className='flex flex-col justify-center items-start w-full'
      onSubmit={handleSubmit}>
      <input
        className='border border-gray-300 p-2 w-full rounded'
        type='text'
        name='name'
        id='name'
        placeholder=' Tu nombre '
        onChange={handleChange}
      />
      <input
        className='border border-gray-300 p-2 w-full rounded mt-2'
        type='text'
        name='phone'
        id='phone'
        placeholder=' Tu número de teléfono para llamarte '
        onChange={handleChange}
      />
      {error && <p className='text-red-500 mt-2'>{error}</p>}
      {success && <p className='text-green-500 mt-2'>{success}</p>}

      <button
        disabled={!formData.name || !formData.phone}
        className={
          !formData.name || !formData.phone
            ? " p-2 mt-2 w-full rounded cursor-not-allowed"
            : `text-white p-2 mt-2 w-full rounded`
        }
        style={
          !formData.name || !formData.phone
            ? { background: "#ccc" }
            : { background: btnColor }
        }
        type='submit'>
        {loading ? "Llamando..." : "Llamar"}
      </button>
    </form>
  );
};

export default Form;
