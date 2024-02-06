import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTodos } from "../context/TodoContextProvider";

const TodoDetails = () => {
  const { id } = useParams();
  const { getOneTodo, oneTodo } = useTodos();
  useEffect(() => {
    getOneTodo(id);
  }, []);
  return (
    <div>
      <img className="img" src={oneTodo.todoImg} alt="" />
      <h3>{oneTodo.todoName}</h3>
      <h5>{oneTodo.todoPhone}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        veritatis id recusandae cupiditate mollitia numquam, molestiae
        accusantium ab! Optio, repudiandae quidem. Incidunt quasi laboriosam
        dolor magni, error aperiam sunt aspernatur accusamus tenetur nesciunt
        culpa ex esse nemo quibusdam dolorem sint voluptatum porro quos amet
        tempora nisi nam, officia, nobis suscipit. Officia, et est voluptatem
        dolor voluptatum veniam nam aspernatur quae facilis accusantium
        quibusdam dolorem nulla deserunt molestiae quis autem eius aliquam
        repellendus, quaerat consectetur perferendis totam. Dolores soluta ad
        molestias qui vitae, magni mollitia enim et nemo voluptatem quidem
        sapiente nulla cupiditate iste eius quod maiores at, necessitatibus
        adipisci totam!
      </p>
    </div>
  );
};

export default TodoDetails;
