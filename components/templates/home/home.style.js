import styled from 'styled-components';
import { } from '@resystem/design-system';
 
export const Content  = styled.div`
  padding: 16px;
  background-color:black;
  
`;


export const FirstBoxContentMobile = styled.div`
 @media only screen and (max-width: 769px){
  background-size:cover; background-image: url("static/images/player_01 (1).png"); height:400px;display:block; width:100%;
  }

  @media only screen and (min-width: 769px){
    display:none;
   
   }

 `;

 export const FirstBoxContent = styled.div`
 @media only screen and (max-width: 769px){
   display:none;
  }

  @media only screen and (min-width: 769px){
    background-image: url("static/images/Header-2 2.png"); height:600px;
   }

 `;

 export const Mosaico = styled.div`
 @media only screen and (min-width: 769px){
   background-color:black;   display:flex;}

 @media only screen and (max-width: 769px){}`;

 export const MosaicoTextBox = styled.div`
 @media only screen and (min-width: 769px){
   background-color:black; width:50%;  padding:90px;height:341px;}

 @media only screen and (max-width: 769px){ display: none;}`;


 export const MosaicoTextBoxMobile = styled.div`
 @media only screen and (min-width: 769px){
   display:none;}

 @media only screen and (max-width: 769px){background-color:black; width:100%; padding:90px;height:341px;display:block;height:341px;}`;


 export const MosaicoImage = styled.div`
 @media only screen and (min-width: 769px){
   background-size: cover;background-image: url("static/images/_1-1.png");background-size: cover; height:341px; width:50%; display:flex;}

 @media only screen and (max-width: 769px){ background-size: cover;background-image: url("static/images/_1-1.png");background-size: cover; width:100%;height:341px;display:block;}`;
 
  
 
 export const MosaicoImage2 = styled.div`
 @media only screen and (min-width: 769px){
   background-size: cover;background-image: url("static/images/_3-3.png");background-size: cover; height:341px; width:50%; display:flex;}

 @media only screen and (max-width: 769px){ background-size: cover;background-image: url("static/images/_3-3.png");background-size: cover; width:100%;height:341px;display:block;}`;
 
 export const MosaicoImage3 = styled.div`
 @media only screen and (min-width: 769px){
   background-size: cover;background-image: url("static/images/Group 371.png");background-size: cover; height:341px; width:50%; display:flex;}

 @media only screen and (max-width: 769px){ background-size: cover;background-image: url("static/images/Group 371.png");background-size: cover; width:100%;height:341px;display:block;}`;
 
export const CallAction = styled.div`

@media only screen and (min-width: 769px){
  height:145px;
  width:100%;
  margin:auto;
  padding-top:30px;
  padding-botton:40px;
  padding-left:142px;
  padding-right:142px;display:flex;}


background-image: url("/static/images/bgCallActionDesktop.png");
 }
@media only screen and (max-width: 769px) {
display: block;
padding:30px;
height: 320px;
background-image: url("/static/images/bgCallActionMobile.png");
   }`;
  



   export const FirstColumnCover = styled.div`
@media only screen and (min-width: 769px){

  margin-left:100px;
  width:50%;
   
}
@media only screen and (max-width: 769px){
  display:none;
   
  }
`;

export const SecondColumnCover = styled.div`
@media only screen and (min-width: 769px){

  margin-left:100px;
  width:50%;
   
}
@media only screen and (max-width: 769px){
  display: block;
  width:100%;
  background-image: url("static/images/player_01-15.png"); height:810px;
  height:700px;
  background-repeat: no-repeat; 
   
   
  }
`;

export const FirstColumn = styled.div`
@media only screen and (min-width: 769px){

  padding-right:80px;
  padding-bottom:20px;
   
}
@media only screen and (max-width: 769px){
  display:flex-inline;
  padding-bottom:20px;
  padding-bottom:10px;
   
  }
`;

export const SecondColumn = styled.div`
 display:block;
`;


export const FirstRowCover = styled.div`
 @media only screen and (min-width: 769px){
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  
   
}
}
@media only screen and (max-width: 769px){
  display:none;
   
  }
`;


export const FirstRowCoverMobile = styled.div`
 @media only screen and (min-width: 769px){
  display:none;
  
   
}
}
@media only screen and (max-width: 769px){
  display: block;
  width:100%;
  background-color:black;
  padding:60px;
   
  }
`;
  
 export const FirstRow = styled.div`
 @media only screen and (min-width: 769px){
  padding-bottom:10px;
}
@media only screen and (max-width: 769px){
  display:flex-inline;
  padding-bottom:20px;
   
  }
`;
 

 export const SecondRow = styled.div`
 @media only screen and (min-width: 769px){
  padding-bottom:20px;
 }
@media only screen and (max-width: 769px){
  padding-bottom:20px;
   
  }
 `;

 export const BoxOasis = styled.div`
 background-color:black;
 display:flex;
 padding:50px;
 @media only screen and (max-width: 769px) {
  display: block;
padding:20px;}

 `;

 export const ImageOasi = styled.img`
 @media only screen and (max-width: 769px) {
  display: block;
 padding:0px;
WIDTH:100%;
 `;
 
 