import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const INCIDENT_TYPES = ["Colisão", "Furto", "Roubo", "Incêndio", "Alagamento"];

export function StepIncident(props: any) {
  const { register, handleSubmit, control, reset, watch } = useForm();
  const description = watch("description");

  useEffect(() => {
    reset({
      incidentType: props.formData.incidentType || "",
      incidentDate: props.formData.incidentDate || "",
      description: props.formData.description || "",
    });
  }, []);

  function onSubmit(data: any) {
    props.setFormData({ ...props.formData, ...data });
    props.setCurrentStep(3);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Passo 2 — Dados do incidente</h2>

      <div>
        <label>Tipo de sinistro</label>
        {props.currentStep === 2 && (
          <select {...register("incidentType", { required: true })}>
            <option value="">Selecione...</option>
            {INCIDENT_TYPES.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label>Data do incidente</label>
        <Controller
          name="incidentDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="date" {...field} />
          )}
        />
      </div>

      <div>
        <label>Descrição do ocorrido</label>
        <textarea
          {...register("description", { required: true })}
          rows={4}
        />
        <small>Caracteres digitados: {description?.length ?? 0}</small>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => props.setCurrentStep(1)}>
          Voltar
        </button>
        <button type="submit">Próximo</button>
      </div>
    </form>
  );
}
