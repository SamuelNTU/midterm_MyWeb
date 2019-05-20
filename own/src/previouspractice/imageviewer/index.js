import React, { Component } from "react";
import Unsplash, { toJson } from "unsplash-js";


var img_list 
const unsplash = new Unsplash({
  applicationId:
    "5e4ff80a12329438b3ac84ab1bf0f6893a64be75ce57b3f2b85b1ff7da569d41",
  secret: "ea547d7c304d75e3245166a06cc8ff5cf06ef8e4ac88fddd5eec2298b5306d31"
});

// console.log(unsplash.photos.getPhoto("pFqrYbhIAXs").)
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);



class ImageViewer extends Component {
  state = {
    page:1,
    img_count: 0,
    getAPI :0,
    loading:0,
    images:[]
  };
 searchAPT=async()=>{
  const img = document.getElementById("display");
   const search=document.getElementById("search_photo").value
   if(search!==""){
   const imgstate=document.getElementById("imgstate")
   var img_count=this.state.img_count
   this.setState({page:(this.state.page+1)})
   imgstate.innerHTML="reqesting..."
   img_list=await unsplash.search.photos(search, this.state.page,20).then(toJson)
   imgstate.innerHTML="finish"
    img.onload=function(){

    
    img.src = img_list['results'][img_count]["urls"]["regular"];
    }
    img.src=images[1]
      document.getElementById("source").href =
        img_list['results'][img_count]["urls"]["regular"];
    }
  }
  // console.log(this.state.images) 
 
  getAPI= async()=>{
    const img = document.getElementById("display");
    const imgstate=document.getElementById("imgstate")
    var img_count=this.state.img_count
    this.setState({loading:1})
    document.getElementById("pic_for").onclick=null;
    document.getElementById("current_img").style.display='inline'
    var getAPI=this.state.getAPI
    imgstate.innerHTML="reqesting..."
    //操你媽 await 玩不是promise 
    img_list = await unsplash.photos.listPhotos(getAPI, 20, "latest").then(toJson);
    imgstate.innerHTML="finish"
    
    console.log(img_list)
    
      img.onload=function(){
        img.src=img_list[img_count]["urls"]["regular"];
      }
      img.src = images[1]
      document.getElementById("source").href =
        img_list[img_count]["urls"]["regular"];
    console.log(img_list)
    getAPI+=20
    this.setState({getAPI})
    this.setState({img_count:0})
    console.log(img_list)
  }

  add_array = (e) => {
    
    const img = document.getElementById("display");
    console.log(img.src)
    if(img.src==="https://via.placeholder.com/400"){
      alert('please request or search for the picture first !')
    }
    else{
      
    if(img.src)
    console.log(e.target.id)
    if(e.target.id==="pic_for"){
      var img_count = this.state.img_count + 1;
      if(img_count>19){
        img_count=0
      }
      this.setState({ img_count });

    }
    else{
      img_count = this.state.img_count - 1;
      if(img_count<0){
        img_count=19
      }
      this.setState({ img_count });
    }
    
    
      
      if(img_list['results']){
        console.log(this.state.img_count);
        img.onload=function(){
          img.src=img_list['results'][img_count]["urls"]["regular"];
        }
        img.src = images[1]
      document.getElementById("source").href =
        img_list['results'][img_count]["urls"]["regular"];
      }
      else{
        img.onload=function(){
          console.log(this)
          img.src=img_list[img_count]["urls"]["regular"];
        }
        img.src = images[1]
      console.log(img_count);
      document.getElementById("source").href =
        img_list[img_count]["urls"]["regular"];
      }
      
    
  }
}
    modalimgpop=()=> {
      const modalimg = document.getElementById("modal");
      const modaldiv = document.getElementById("myModal");
      modaldiv.style.display = "block";
      modalimg.src = document.getElementById("display").src;
    }
    closemodal=() =>{
      const modaldiv = document.getElementById("myModal");
      console.log(modaldiv)
      modaldiv.style.display = "none";
    }

    render() {
    return (
      <React.Fragment>
        

        <div className="container">
        
          <h1 style={{ textAlign: "center" }}>
            JavaScript Practice - Image Viewer
          </h1>
          

          <p id="date" className="badge-light bold" />
          <div className="row">
          <p className="lead col-md-6">get 20 latest pictures using unsplash API</p>
          <form className="col-md-6">
            <div className="form-group">
              <label>search</label>
              <input
                type="text"
                id="search_photo"
                placeholder="specific photo, ex:dog cat "
                className="form-control"
                style={{maxWidth:"70%"}}
              />
            </div>
            <button type="button" className="m-1 btn btn-default btn-outline-dark" onClick={this.searchAPT}>
              submit
            </button>
          </form>
          <button onClick={this.getAPI} className="btn btn-defaulf border-dark col-3 m-3 p-0">Request 20 newest img</button>
          <p id="imgstate" className="col-3"></p>
          <p className="bold col-md-12" id="current_img" style={{display:'none'}}>currently showing newest: {this.state.getAPI-20} - {this.state.getAPI} images</p>
          <div className="container m-3 p-0">
          
          </div>
          </div>
          <div className="image-viewer__container">
            <h1 className="image-viewer__title">Image Viewer</h1>
            <div className="image-viewer__main">
            
              <div className="image-viewer__button" onClick={this.add_array} >
                <img alt="" src={images[0]} id="pic_for"/>
              </div>
              <div className="container">
              <h1  className="text-center text-success text-black-50" style={{top:200}}>Unsplash API Image Viewer</h1>
              <img
                className="image-viewer__display"
                id="display"
                src="https://via.placeholder.com/400"
                alt=""
                onClick={this.modalimgpop}
              />
              </div>
              {/* <p className="image-viewer__display-source-wrapper"></p> */}

              {/* <!--modal--> */}
              <div id="myModal" className="modal1">
                <span className="close1" onClick={this.closemodal}>
                  &times;
                </span>
                <img alt="" className="modal-content1" id="modal" />
              </div>
              <div className="image-viewer__button" onClick={this.add_array}>
                <img alt="" src={images[2]} id="pic_back"/>
              </div>
            </div>
          </div>
          <a href="./images/pizza01.jpg" id="source" style={{textAlign:"center"}}>
          Source
        </a>
        </div>
        <div style={{ margin: 100 }} />
      </React.Fragment>
    );
  }
}
export default ImageViewer;
