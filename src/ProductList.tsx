import React from "react";
import Faker from "faker";

interface ProductListProps {
  title: string;
  description: string;
  amount: number;
}

const GenerateData = (length: number) => {
  let data: JSX.Element[] = [];
  for (let i = 0; i < length; i++) {
    data.push(
      <tr key={i}>
        <td>{Faker.commerce.productName()}</td>
        <td>{Faker.commerce.color()}</td>
        <td>{Faker.commerce.price()}</td>
      </tr>
    );
  }
  return data;
};

export const ProductList = (props: ProductListProps) => (
  <>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{GenerateData(props.amount)}</tbody>
    </table>
  </>
);
