import React, { useState, useEffect } from "react";

function formatCpf(value: string) {
  const clean = value.replace(/\D/g, "").slice(0, 11);
  return clean
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatPhone(value: string) {
  const clean = value.replace(/\D/g, "").slice(0, 11);
  return clean
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

export function StepPersonal(props: any) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cpfError, setCpfError] = useState("");

  useEffect(() => {
    if (cpf) {
      const clean = cpf.replace(/\D/g, "");
      if (clean.length !== 11) {
        setCpfError("CPF inválido");
      } else {
        setCpfError("");
      }
    }
  }, [cpf, cpfError]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (cpfError || !name || !cpf || !phone || !email) return;
    props.setFormData({ ...props.formData, name, cpf, phone, email });
    props.setCurrentStep(2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Passo 1 — Dados pessoais</h2>

      <div>
        <label>Nome completo</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>CPF</label>
        <input
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
        />
        {cpfError && <span style={{ color: "red" }}>{cpfError}</span>}
      </div>

      <div>
        <label>Telefone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
        />
      </div>

      <div>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Próximo</button>
    </form>
  );
}
