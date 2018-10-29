// @flow
import React from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Dispatch } from "redux";
import {board} from "../data";


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "red",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

class Appt extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            board: board
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
    }

    onDragStart = () => {
        console.log('drag start')
    }

    onDragEnd = result => {
        const {source,destination} =result

        if (!destination) {
            console.log('test')
            return null
        }

        if (source.droppableId == destination.droppableId) {
            console.log('destination remain')
        } else {

        }
    };

    render() {
        const { fetching, board, dispatch } = this.props;

        if (fetching || board == null)
            return (
                <div className="view-container boards show">
                    <i className="fa fa-spinner fa-spin" />
                    <h1>no data</h1>
                </div>
            );

        console.log("board is: " + JSON.stringify(board.lists));
        console.log("card is: " + JSON.stringify(board.lists[0].cards[0].title));
        // sprint.lists.map(list => {
        //   console.log(list.id);
        // });
        // console.log(JSON.stringify(sprint.lists));
        //
        // return <h1>hello</h1>;

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.board.lists.map((list, index) => (
                    <Droppable droppableId={list.name}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {list.cards.map((card, index) => (
                                    <Draggable key={card.id} draggableId={card.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                {card.title}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        );
    }
}

// Put the things into the DOM!
// ReactDOM.render(<App board={board} />, document.getElementById("root"));
export default Appt
