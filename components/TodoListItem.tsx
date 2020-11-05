import React, { useState } from "react";

interface ToDoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  };
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({todo}) => {
  const [item, setItem] = useState([]);

  return <div></div>;
};
