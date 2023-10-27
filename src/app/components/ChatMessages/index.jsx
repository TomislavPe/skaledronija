import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

const ChatMessages = ({ messages }) => {
  return (
    <ListGroup>
      {messages && messages.map((message) => (
        <ListGroup.Item key={message.id}>User:{message.member.clientData.name}, Message: {message.data}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChatMessages;