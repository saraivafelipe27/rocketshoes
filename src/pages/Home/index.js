import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
          alt="Tenis"
        />
        <strong>Tênis muito bonito</strong>
        <span>R$149,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
          alt="Tenis"
        />
        <strong>Tênis muito bonito</strong>
        <span>R$149,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
          alt="Tenis"
        />
        <strong>Tênis muito bonito</strong>
        <span>R$149,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
          alt="Tenis"
        />
        <strong>Tênis muito bonito</strong>
        <span>R$149,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJ7G0xjJX-6QlCyT2g8Q05Ck091ms3mAvCv1LfHL9iOTran4dAqRW3Q0mIb4hp9w6BHfFnbzccglIh3Fw71gbpjrC_vHAXcV6-1rx5oYtPHLAIjqzuWDWn&usqp=CAE"
          alt="Tenis"
        />
        <strong>Tênis muito bonito</strong>
        <span>R$149,90</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
