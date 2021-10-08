/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import RecordTransactionForm from './RecordTransactionForm';

describe('Formulário de cadastro de transações', () => {
  it('deve renderizar o componente', () => {
    render(<RecordTransactionForm />);
  });
  describe('Renderização dos campos:', () => {
    it('deve possuir um campo de valor', () => {
      const tLabelText = /valor/i;
      const { getByLabelText } = render(<RecordTransactionForm />);

      getByLabelText(tLabelText);
    });
    it('deve possuir um campo de data', () => {
      const tLabelText = /data/i;
      const { getByLabelText } = render(<RecordTransactionForm />);

      getByLabelText(tLabelText);
    });
    it('deve possuir um campo de origem da transação', () => {
      const tLabelText = /origem/i;
      const { getByLabelText } = render(<RecordTransactionForm />);

      getByLabelText(tLabelText);
    });
  });
});
