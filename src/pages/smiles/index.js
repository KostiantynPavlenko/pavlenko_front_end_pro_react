import SmilesList from "./components/List";
import SmileWinner from "./components/Winner";
import SmileActions from "./components/Actions";
import SmileProvider from "../../contexts/SmilesContext";

import "./Smiles.css";

export default function Smiles() {

  return (
    <div>
      <SmileProvider>
        <SmilesList/>
        <SmileActions/>
        <SmileWinner/>
      </SmileProvider>
    </div>
  );

}