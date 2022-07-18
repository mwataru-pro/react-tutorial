import { useState } from 'react';
import './App.css'

function MyButton() {
  // const message = "Hello, World!!"
  const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function ProductList() {
  return (
    <ul>
      {products.map((product) => {
        return (
        <li key={product.id}>
          <h2>{product.title}</h2>
        </li>
        );
      })}
    </ul>
  );
}

function App() {
  return (
<div>
  <MyButton/>
  <Profile/>
  <ProductList />
</div>
  );


}

export default App
