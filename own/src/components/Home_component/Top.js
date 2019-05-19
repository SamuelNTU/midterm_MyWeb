import React from 'react'


const Top= props =>{
    return(
    <article id="top"  style={{backgroundColor:'#eceeef'}}>
            <div className="container">
              <div className="row">
                <div className="col-4 col-5-large col-12-medium">
                  <span className="image fit">
                    <img src={props.Selfie} style={{ borderRadius: "100%",maxWidth:"100%" ,maxHeight:"80%"}} alt="" />
                  </span>
                </div>
                <div className="offset-1 col-7 col-7-large col-12-medium">
                  <header>
                    <h1>
                      Hi. I'm <strong>{props.name}</strong>.
                    </h1>
                  </header>
                  <div>{props.introduction}</div>
                  <p>
                
                  I'm a first-year graduate student in Department of Biomechatronics Engineering.
                    <br/>Currntly in love with web developing from frontend to backend
                    <br/>Hope I can continue my passion and absorb more knowledge.
                    
                    
                  </p>
                </div>
              </div>
            </div>
          </article>
    );
}
export default Top;