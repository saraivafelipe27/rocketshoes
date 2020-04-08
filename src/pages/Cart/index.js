import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
                alt="tênis"
              />
            </td>
            <td>
              <strong>Tênis muito bonito</strong>
              <span>R$149,90</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={2} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$299,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1500,35</strong>
        </Total>
      </footer>
    </Container>
  );
}
