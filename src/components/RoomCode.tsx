import copyImg from "../assets/images/copy.svg";
import "../styles/roomcode.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
    alert('código copiado')
  }


  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard} >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  );
}
