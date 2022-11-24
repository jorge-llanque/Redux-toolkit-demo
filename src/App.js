import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./features/counter/Counter";
import PokemonList from "./features/PokemonList";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <PokemonList />
    </Provider>
  );
}
