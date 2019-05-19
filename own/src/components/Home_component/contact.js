import React from 'react'

const Contact=(props)=>{
    return(
    <div className="col-auto mr-3 p-2">
        
          <h3>Find me...</h3>
          <ul className="list-group list-group-horizontal w-auto">
            <li className="list-group-item list-group-item-action">
              <a href={props.link.facebook} style={{color:'blue',fontSize:20}} className="fab fa-facebook-square">
                <span className="label ml-1" style={{color:'black'}}>Facebook</span>
              </a>
            </li>
            <li className="list-group-item list-group-item-action">
              <a href={props.link.linkedin} style={{fontSize:20,color:'CornflowerBlue' }} className="fab fa-linkedin">
                <span className="label ml-1" style={{color:'black'}}>LinkedIn</span>
              </a>
            </li>
            <li className="list-group-item list-group-item-action">
              <a href={props.link.github} style={{fontSize:20}} className="fab fa-github">
                <span className="label ml-1">Github</span>
              </a>
            </li>
          </ul>
      
    </div>
  );
}
export default Contact;