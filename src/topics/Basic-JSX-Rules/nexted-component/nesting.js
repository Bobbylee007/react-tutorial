// Nested Components, React tools
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

//outside greeting component
//NB: component name is case sensetive most start with a capital letter
const Person = () => <h2>bobby austine</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
//NB: we can do import and export of component too
