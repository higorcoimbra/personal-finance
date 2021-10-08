import React from 'react';

export default function RecordTransactionForm() {
  return (
    <>
      <label htmlFor="valor-input">Valor</label>
      <input id="valor-input" type="text" />

      <label htmlFor="data-input">Data</label>
      <input id="data-input" type="date" />

      <label htmlFor="data-input">Origem</label>
      <input id="data-input" type="text" />
    </>
  );
}
