/* import { FormEvent, useState } from "react"; */
import { useParams } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
/* import { useAuth } from "../hooks/useAuth"; */
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";

type ParamsProps = {
  id: string;
};

export function AdminRoom() {
/*   const { user } = useAuth(); */
  const params = useParams<ParamsProps>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  return (
    <div id="page-room">
      <header>
        {/*O space-between vai separar pelas duas divs e nao pelos tres itens */}
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined >Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {
            //Percorrendo o array e retornando no componente
            questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                />
              );
            })
          }
        </div>
      </main>
    </div>
  );
}
