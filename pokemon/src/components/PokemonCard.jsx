import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import "./ComponentList.css";
import StartButton from "./StartButton";

const PokemonCard = ({ name, image, abilities, id, favorite, types }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const abilitiesStyle = {
    color: "#000000", // Cambia este color según tus preferencias
    opacity: 0.9, // Ajusta la opacidad según tus preferencias
  };

  return (
    <Card
      className="color card"
      style={{ width: 240, height: 580 }}
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        description={
          <ul>
            <h3 style={abilitiesStyle}> Abilidades :</h3>
            {abilities.map((ability) => (
              <>
                <li key={ability.ability.name} style={abilitiesStyle}>
                  {ability.ability.name}
                </li>
              </>
            ))}
          </ul>
        }
      />
      <Meta
        description={
          <>
            <ul>
              <h3 style={abilitiesStyle}> Types :</h3>
              <li style={abilitiesStyle}>{typesString}</li>
            </ul>
          </>
        }
      />
    </Card>
  );
};

export default PokemonCard;
