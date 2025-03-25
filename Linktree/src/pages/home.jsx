import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import perfil from "../img/perfil.png"
 
export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div className="container">
        <img  id="perfil" src={perfil} alt=""/>
        <h1 className="title">@Thaylon</h1>
       
<div class="container2">
  <input type="checkbox" name="checkbox" id="checkbox" onClick={toggleTheme} />
  <label for="checkbox" class="label"> </label>
</div>


        <div className="links">

      <p>Inscreva-se no NLW</p>
      <p>Baixe meu e-book</p>
      <p>Veja meu portfólio</p>
      <p>Conheça o Explorer</p>

        </div>

        <Link to="/about">About</Link>
      </div>
    </>
  );
}
