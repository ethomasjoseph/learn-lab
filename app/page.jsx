import LikeButton from "./like-button";

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

  return (
    <div>
      <Header title="NextJS has arrived!" />
      <ul>
        {names.map( (name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Profile/>
      <LikeButton />
    </div>
  );
}
