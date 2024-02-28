export default function Ferramenta(props) {
  return (
    <div className="ferramentas">
      <img className="ferra-img" src={props.img} alt={props.alt} />
      <label>{props.nome}</label>
    </div>
  );
}
