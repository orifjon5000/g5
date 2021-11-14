import React, { PureComponent } from "react";
import { Container } from "./Style";
import Card from "./Card/Index";
import { student } from "../../utils/sidebar";

class Index extends PureComponent {
  state = {
    active: null,
    student: student,
    name: "",
    surname: "",
    status: "",
  };

  render() {
    const onDelete = (id) => {
      // console.log(this.state.student);
      let newData = this.state.student.filter((value) => value.id !== id);
      this.setState({ student: newData });
    };
    const onChange = (e) => {
      // console.log(e.target.value, e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };

    const onAdd = () => {
      if (!this.state.active) {
        // !this.state.status.match("[a-zA-Z]+")
        let newUser = {
          id: this.state.student.length + 1,
          name: this.state.name,
          surname: this.state.surname,
          status: this.state.status,
        };
        this.setState({ student: [...this.state.student, newUser] });
      } else {
        let newUser = {
          // id: this.state.student.length + 1,
          name: this.state.name,
          surname: this.state.surname,
          status: this.state.status,
        };
        let user = this.state.student.map((value) =>
          value.id === this.state.active ? { ...value, ...newUser } : value
        );
        this.setState({ student: user });
      }
      this.setState({
        //inputni malumot qushsa tozalab quyadi
        active: null,
        name: "jjj",
        surname: "",
        status: "",
      });
    };
    const onEdit = (value) => {
      this.setState({
        active: value.id,
        name: value.name,
        surname: value.surname,
        status: value.status,
      });
    };
    return (
      <Container>
        <h1>{this.state.name}</h1>
        <h1>{this.state.surname}</h1>
        <h1>{this.state.status}</h1>
        <button style={{ width: "120px" }}>add user</button>

        <div>
          <input
            value={this.state.name}
            onChange={onChange}
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            value={this.state.surname}
            onChange={onChange}
            type="text"
            placeholder="surname"
            name="surname"
          />
          <input
            value={this.state.status}
            onChange={onChange}
            type="text"
            placeholder="status"
            name="status"
          />
          <button onClick={onAdd}>add</button>
        </div>

        {this.state.student.length ? (
          this.state.student.map((value) => (
            <Card
              active={this.state.active == value.id}
              onEdit={onEdit}
              onSave={onAdd}
              onDelete={onDelete}
              key={value.id}
              value={value}
            />
          ))
        ) : (
          <h1>no data</h1>
        )}
      </Container>
    );
  }
}

export default Index;
