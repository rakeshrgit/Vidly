import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
class EditModal extends Component {
    constructor(props) {
        super();
        this.state = {
            id : props.movie._id,
            title : props.movie.title,
            genre : props.movie.genre.name
        } 
    } 
    handleSave=()=>{
        console.log('ssss')
    }
    render() { 
        //console.log =('propsddds', this.props);
        return (
            <div>
               <Modal 
                size="lg"
                show={this.props.showModal} 
                onHide={this.props.closeModal}
               >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <React.Fragment>
                   <div className="mb-3">
                    <label  className="form-label">Title</label>
                        <input type="text" className="form-control"  
                            placeholder="Title"
                            value={this.state.title} 
                            onChange={
                                (e)=>(this.setState({title: e.target.value}))
                            }
                        />
                    </div>
                    <div className="mb-3">
                    <label  className="form-label">Genre</label>
                        <input type="text" className="form-control"  
                        placeholder="Genre"
                        value={this.state.genre} 
                        onChange={
                            (e)=>(this.setState({genre: e.target.value}))
                        }
                        />
                    </div>
                                    
                    </React.Fragment>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary btn-lg"
                        onClick={()=>this.props.onSave(
                            this.state.id,
                            this.state.title,
                            this.state.genre
                        )}
                        >
                            Save changes
                        </button>
                    <button className="btn btn-danger btn-lg" onClick={this.props.closeModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}
 
export default EditModal;