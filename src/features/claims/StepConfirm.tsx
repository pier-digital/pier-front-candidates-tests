import React, { useState } from "react";

export function StepConfirm(props: any) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...props.formData,
      fileName: file?.name,
    };

    await fetch("https://bff.pier.digital/v1/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return <p>Sinistro aberto com sucesso!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Passo 3 — Confirmação</h2>

      <div>
        <p><strong>Nome:</strong> {props.formData.name}</p>
        <p><strong>CPF:</strong> {props.formData.cpf}</p>
        <p><strong>Tipo:</strong> {props.formData.incidentType}</p>
        <p><strong>Data:</strong> {props.formData.incidentDate}</p>
        <p><strong>Descrição:</strong> {props.formData.description}</p>
      </div>

      <div>
        <label>Anexar documento (opcional)</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => props.setCurrentStep(2)}>
          Voltar
        </button>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Confirmar e abrir sinistro"}
        </button>
      </div>
    </form>
  );
}
