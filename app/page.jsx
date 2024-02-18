import { useState } from 'react';
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  )
}
function Header({title, altText}) {
  console.log(title);
  console.log(altText);
  return (<h1 alt={altText}>{title}</h1>);
}
export default function Homepage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);
  function handleLike(e) {
    console.log('increment like count = ', e);
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header title="Reaction" altText="React Title"/>
      <Header title="Next would be NextJS" />
      <ul>
        {names.map( (name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Profile/>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}
