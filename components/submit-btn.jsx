import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function SubmitBtn() {
      // Estado para manejar si el formulario está siendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Simula el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario
    setIsSubmitting(true); // Marcar como enviando

    // Simular una operación asíncrona de envío, por ejemplo, una solicitud HTTP
    setTimeout(() => {
      setIsSubmitting(false); // Restablecer el estado una vez completado el envío
      // Aquí puedes agregar lógica adicional una vez que el envío ha sido procesado
    }, 2000); // Simula un retraso de 2 segundos
  };


  return (
    <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        disabled={isSubmitting}
        onClick={(e)=>handleSubmit(e)}
    >
        {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
        <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
        )}
  </button>
  );
}