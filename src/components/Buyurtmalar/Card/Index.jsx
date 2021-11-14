import React, { PureComponent } from "react";
import { Container, User } from "./Style";

class Card extends PureComponent {
  render() {
    const { id, name, surname, status, user } = this.props.value;
    const { onDelete } = this.props;
    console.log(this.props.active);
    return (
      <Container>
        <User.Title size={"id"}>{id} </User.Title>
        <User.Title>{name} </User.Title>
        <User.Title>{surname} </User.Title>
        <User.Title>{status} </User.Title>
        <User.Title size="action">
          {this.props.active ? (
            <button onClick={() => this.props.onSave()}>save</button>
          ) : (
            <button
              onClick={() =>
                this.props.onEdit({ id, name, surname, status, user })
              }
            >
              edit
            </button>
          )}
          <button onClick={() => onDelete(id)}>delete</button>
        </User.Title>
      </Container>
    );
  }
}

export default Card;
