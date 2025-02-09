import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

// Add a task to the list.
// Edit a task in the list.
// Delete a task from the list

class App extends Component {
  constructor(props) {
    super(props);   // This line makes sure that we can use React's built in features


    // We start with an empty text box and an empty list
    this.state = {
      userInput: "",
      list: [],
    }
  }

  // function to change what is stored in userInput
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }


  // function to add a new task to your list when you click a button
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),    // to generate random id
        value: this.state.userInput,   // Store the task
      };


      const list = [...this.state.list];  // copy the existing list into new

      list.push(userInput);


      this.setState({
        list,
        userInput: "",
      })
    }
  }


  deleteItem(key) {
    // copy the current list
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);


    // save the new list
    this.setState({
      list: updateList,
    })
  }

  editItem = (index) => {
    //copy the list
    const todos = [...this.state.list];


    const editedTodo = prompt('Edit the todo:');

    if (editedTodo !== null && editedTodo.trim() !== '') {
      todos[index].value = editedTodo;

      this.setState({
        list: todos,
      })
    }
  }

  render() {
    return (
      <Container className="mt-5">
        {/* this is the title of tthis app */}
        <Row style={
          {display: "flex",justifyContent: "center",alignItems: "center",fontSize: "3rem",fontWeight: "bolder"}}>
          TODO LIST
        </Row>

        <hr />
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <InputGroup className="mb-3">
              <FormControl placeholder="add item ....." size="lg" value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something" />

            </InputGroup>
            <Button variant="dark" className="mt-2" onClick={() => this.addItem()}>
              ADD
            </Button>

          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={{ span: 5, offset: 4 }}>

            <ListGroup>
              {
                this.state.list.map((item, index) => {
                  return (
                    <div key={index}>
                      <ListGroup.Item variant="dark" action style={{ display: "flex", justifyContent: 'space-between' }}>
                        {item.value}  {/* The task text */}
                        <span>
                          <Button style={{ marginRight: "10px" }} variant="outline-secondary" onClick={() => this.deleteItem(item.id)}>
                            Delete  {/* Button to remove the task */}
                          </Button>
                          <Button variant="light" onClick={() => this.editItem(index)}>
                            Edit  {/* Button to change the task */}
                          </Button>
                        </span>
                      </ListGroup.Item>
                    </div>
                  )
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}



export default App;
