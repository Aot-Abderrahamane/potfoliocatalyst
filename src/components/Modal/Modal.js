import React, { Component } from 'react'
import {HeadModal,Par} from "./ModalStyle";
import './Modal.css';
export default class Modal extends Component {
  render() {

    let modelStyle={
        display:'block',
        background: "#0F2027",  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    }
    let imgstyle={
        border:"3px solid",
        borderRadius: "30px",
    }
    
    return (
        
        <div className="modal show fade model-style" style={modelStyle}>
            <div className="modal-dialog  modal-dialog modal-fullscreen modal-open "  style={{overflow:"hidden",overflowY:"scroll",paddingRight:"0"}} >
                    <div className="modal-content">
                    
                <div className="modal-body model-style">
                    <div className="container-fluid">
                        <div className='row '>
                            <div className='col'>
                            <h5 className="modal-title">{this.props.title}</h5>
                            </div>
                            <div className='col'></div>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.hide}></button>
                    
                        </div>
                        <div className="row "style={{textAlign:"start"}} >
                                    
                                        <div className="row  " >
                                        
                                        <div className="col" >
                                            <HeadModal className="modal-heading">Aperçu général </HeadModal>
                                        </div>
                                            </div>
                                            <div className="row  " >
                                        <div className="col" >
                                            <Par>{this.props.description}</Par>
                                        </div>
                                        <div className="col pr-2">
                                            <iframe width="790" height="370" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="row  ">
                                        
                                        <div className="col" >
                                            <HeadModal className="modal-heading">DÉTAILS DU PROJET </HeadModal>
                                        </div>
                                            </div>
                                    <div className='row'>
                                            <div className="col-md-6">
                                            <h2><span style={{backgroundColor:"#000", color:"azure"}}>Technologies utilisées: </span></h2>
                                            <ul className="list-inline">
                                                {this.props.stack.map((stack,i)=>
              <><li className="list-inline-item" key={i} style={{ fontSize: "20pt",color:"azure" }}><i className="fa fa-check-circle" style={{ fontSize: '20pt', color: 'azure' }}></i>{stack}</li><br /></>
              )}
            </ul>
                                            </div>
                                    </div>
                                    <div className="row  ">
                                        
                                        <div  >
                                            <HeadModal className="modal-heading">IMAGES DU PROJET </HeadModal>
                                                   
                                                    
                                                
                                                    <div  className='container'>
                                                    
                                                        <div className='gallery-section'>
                                                            <div className='gallery py-2'>
                                                            {this.props.thumbnail.map((thumbnail,i)=>
                                                                    <img key={i} src={thumbnail} alt="x" className="image py-2 " style={imgstyle}></img>
                                                                    )}
                                                            </div>
                                                        </div>
                                                         
                                                    </div>
                                                 

                                        </div>
                                    </div>
                            <div className='row'>
                                <div className='col col-4'>
                                <button type="button" class="btn btn-secondary "  onClick={this.props.hide} data-dismiss="modal">Close</button>


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
