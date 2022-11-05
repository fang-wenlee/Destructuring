import "./styles.css";

const employee = {
  id: "1",
  name: "fang",
  address: {
    street: "34311 Thornhill Ct.",
    city: "Fremont",
    state: "Ca",
    zip: "94555",
    country: "USA"
  }
};

export default function App() {
  const { name, address } = employee;
  return (
    <div className="App">
      <h1>Good Morning {name}</h1>
      <h2>{address.street}</h2>
    </div>
  );
}
