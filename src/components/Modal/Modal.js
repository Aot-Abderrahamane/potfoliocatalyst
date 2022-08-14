import React, { Component } from 'react'
import {HeadModal,Par} from "./ModalStyle";
import './Modal.css';
export default class Modal extends Component {
  render() {

    let modelStyle={
        display:'block',
        backgroundColor:'rgba(0,0,0,0,8)',
    
    }
    
    return (
        
        <div className="modal show fade " style={modelStyle}>
            <div className="modal-dialog  modal-dialog modal-fullscreen modal-open " style={{overflow:"hidden",overflowY:"scroll",paddingRight:"0"}} >
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.hide}></button>
                    </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row "style={{textAlign:"start"}} >
                                    
                                        <div className="row  " >
                                        
                                        <div className="col" >
                                            <HeadModal className="modal-heading">Aperçu général </HeadModal>
                                        </div>
                                            </div>
                                            <div className="row  " style={{backgroundColor: "#F2EBE9"}}>
                                        <div className="col" >
                                            <Par>{this.props.description}</Par>
                                        </div>
                                        <div className="col pr-2">
                                            <iframe width="790" height="370" src="https://www.youtube.com/embed/1Z5aI7txujg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="row  ">
                                        
                                        <div className="col" >
                                            <HeadModal className="modal-heading">DÉTAILS DU PROJET </HeadModal>
                                        </div>
                                            </div>
                                    <div className='row'>
                                            <div className="col-md-6">
                                            <h2>Technologies utilisées: </h2>
                                            <ul className="list-inline">
                                                {this.props.stack.map((stack,i)=>
              <><li className="list-inline-item" key={i} style={{ fontSize: "20pt" }}><i className="fa fa-check-circle" style={{ fontSize: '20pt', color: 'blue' }}></i>{stack}</li><br /></>
              )}
            </ul>
                                            </div>
                                    </div>
                                    <div className="row  ">
                                        
                                        <div  >
                                            <HeadModal className="modal-heading">IMAGES DU PROJET </HeadModal>
                                                   
                                                    
                                                
                                                    <div  className='container'>
                                                    
                                                        <div className='gallery-section'>
                                                            <div className='gallery'>
                                                            {this.props.thumbnail.map((thumbnail,i)=>
                                                                    <img key={i} src={thumbnail} alt="x" className="image "></img>
                                                                    )}
                                                            </div>
                                                        </div>
                                                         
                                                    </div>
                                                 

                                        </div>
                                    </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
      </div>
    )
  }
}
