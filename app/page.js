
import { AiOutlineBulb  } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Row,Col  } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image'

import { TfiRulerAlt } from "react-icons/tfi";
import { LuCircleOff } from "react-icons/lu";
import { FiMinus  } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

import { FaCarSide } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";

import myImage1 from '../public/img1.png';
import myImage2 from '../public/img2.png'; 
import myImage3 from '../public/img3.png';

import logo from '../public/logo1.png';






export default function Home() {  

  return (
    <div className="" style={{paddingLeft:"15px",paddingRight:"15px",marginBottom:"50%"}}>
       
       <div  style={{display:"flex",flexDirection:"row",backgroundColor:"#f0ebe2",height:"80px",alignItems:"center" ,padding:"55px" }}>
                  
                <div  className="changWidthLogo" >
                
                  <Image src = {logo} alt="wdawdawdaw" height={100} width={100} />
               
                </div>


                <input   className="myInput" placeholder="type...." style={{width:"60%",marginLeft:"40px",padding:"15px",border:"0px solid",height:"80px",borderRadius:"15px",backgroundColor:"white"}} />

                
                <div className="scrollOnMobileNav"  > 

                <div style={{display:"flex",overflowX:"scroll",alignItems:"center",justifyContent:"space-between",gap:"15px",paddingLeft:"8%"}} >
                    
                    <div style={{display:"flex",alignItems:"center"}}><AiOutlineBulb color="black"  size = {40} /> <p style={{color:"black",marginTop:"10%"}} > inspiration</p> </div>
                    
                    <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}><CiHeart size = {40} color="black" /> <p style={{color:"black",marginTop:"10%"}}>Mes Favoris</p> </div>
                    
                    <div style={{borderRadius:"100%",padding:"5px",backgroundColor:"#dedede"}}> <p style={{color:"black",marginTop:"15px"}} >24</p> </div>
                      
                      <Button style={{display:"flex",padding:"15px",alignItems:"center"}}> <CiShoppingCart size={40} /> Painter </Button>
                      
                      <FaCircle size = {40} color="white" />
                      
                      <div style={{display:"flex",alignItems:"center"}} >FR <IoIosArrowDown scale={20} /> </div>
                </div>

                </div>


               
       
       </div>

       <div className="changeWidth" style={{display:"flex",gap:"15px",width:"100%",overflowX:"scroll",justifyContent:"space-around",alignItems:"center",marginTop:"35px",padding:"15px"}} >
            
            <p style={{fontWeight:"bold",color:"blue",opacity:"0.8",backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>ART DE LA TABLE</p>
           
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>MOBILIER</p>
            
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>NAPPAGE</p>

            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>MATERIEL DE SALLE</p>

            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>CUISINE</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>BARECUE</p>

            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>TENTE</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>CHAUFFAGE</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>PODIUM - PISTE DE DANSE</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}} >SON -ET LUMIERE</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}}>PACKS</p>
            <p style={{backgroundColor:"#dedede",padding:"15px",borderRadius:"15px",minWidth:"200px"}} >CONSOMMABLES</p>
        </div> 

        <hr></hr>
        
        <div style={{display:"flex",marginLeft:"45px",gap:"15px"}} >
            <p style={{fontWeight:"bold"}}>Home</p>
            <p>.</p>
            <p style={{opacity:"0.8"}}>Art de la table</p>
        </div> 

        <Row style={{width:"100%",padding:"15px"}} >
             
             <Col lg = {6} sm = {12}>
             <Image src = {myImage1} alt="wdawdawdaw" height="100%" width="100%" />
             </Col>

             <Col lg = {6} sm ={12}> 
               <div style={{width:"100%",height:"100%",flexDirection:"column"}}>
                <div>
                     <div style={{width:"100%",display:"flex",justifyContent:"space-between"}} ><h1>Cheese - appareil a raclette 1/2 rue</h1> <CiHeart style={{opacity:"0.5"}} size={50}/> </div>
                    <p></p>
                    39.50 euro / piece
                    <hr style={{opacity:"0.5"}}></hr>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                         
                         <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                         <TfiRulerAlt size={30} style={{opacity:"0.5"}}/>
                         <p style={{opacity:"0.5",fontSize:"20px",marginTop:"15px"}}>20cm</p>
                        <LuCircleOff size={30} style={{opacity:"0.5"}}/>
                        <p style={{opacity:"0.5",fontSize:"20px",marginTop:"15px"}}>50cm</p>
                         </div>
                         <p style={{opacity:"0.5",fontSize:"15px"}}>REF . VABGN5</p>
                    </div>
                    <hr></hr>

                    <Row>
                        
                        <Col lg = {6}>
                        Compiled in 204ms (864 modules)
                        Only plain objects can be passed to Client Components from Server Components. Module objects are not supported.

                        <p style={{marginTop:"10%"}}> 220V 900W</p>
                        </Col>
                        

                    </Row>
                    
                    <hr style={{marginTop:"50px"}}></hr>


                    <div style={{width:"100%",display:"flex",gap:"15px"}}> 
                      
                       <div style={{width:"30%",border:"1px solid",borderRadius:"5px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px"}}> 
                            
                            <FiMinus style={{opacity:"0.5"}} size={30} />

                             <h4>1</h4>

                            <FaPlus style={{opacity:"0.5"}} size={30}/>

                        

                         
                       </div>

                       <div style={{width:"70%"}} >
                          
                          <Button variant="success" style={{width:"100%",height:"70px",opacity:"0.8"}}>AJOUTER AU PANIER </Button>

                       </div>

                       <p></p>

                      

                       </div>


                    
                    
                </div> 

            
               </div>
                
             
             </Col>

        </Row>

        
        <div style={{marginTop:"15px"}}>
        <Row> 

            <Col lg = {6}>
              <h1 style={{opacity:"0.5"}}>Description Produit</h1>
              <p style={{opacity:"0.5"}}>Compiled in 201ms (867 modules)
              Only plain objects can be passed to Client Components from Server Components. Module objects are not supported.</p>
            </Col>

            <Col lg = {6}> 

            <div style={{padding:"25px",opacity:"0.8" , display:"flex" ,justifyContent:"space-between",alignItems:"center" , backgroundColor:"#dedede" }} >
                 
                 <p>Compiled in 201ms (867 modules)</p>
                

                 <FaPlus/>
            </div>
            <div style={{padding:"25px",opacity:"0.8" , display:"flex" ,justifyContent:"space-between",alignItems:"center" , backgroundColor:"#dedede" }} >
                 
                 <p>Compiled in 201ms (867 modules)</p>
                

                 <FaPlus/>
            </div>

            </Col>
            </Row>

            <div style={{width:"100%",marginTop:"50px",display:"flex",padding:"45px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#dedede"}} >
               
               <h1>Article Similaries</h1>

               <a>VOIR TOUTE LA COLLECTION</a> 
             
                
            </div>
            <p></p>
            <div style={{display:"flex",flexDirection:"row",overflowX:"scroll"}}  id = "myContainer" > 

                <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage1} alt="wdawdawdaw" height={200} width={200} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>



                  <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage2} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>



                    <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage2} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>


                  <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage2} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>

            </div>
            
            <p></p>

            <h1>Ces Product Some Title</h1>
           
            <div style={{display:"flex",flexDirection:"row",overflowX:"scroll"}} > 

                    



            <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage3} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>


                  <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage3} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>







                  <div style={{ backgroundColor:"",margin:"5px",border:"1px solid"}}>                 
                    
                    <div style={{position:"relative"}}>
                      
                      <div style={{position:"absolute",zIndex:"1",width:"100%",marginTop:"25px",marginLeft:"25px",display:"flex",justifyContent:"space-between"}}> 
                      <CiHeart size={50}/>

                      <div style={{padding:"15px",marginRight:"45px",marginBottom:"55px",backgroundColor:"white",borderRadius:"15px"}}>
                         Art De La Table
                      </div>

                      </div>

                      <Image src = {myImage3} alt="wdawdawdaw" height={500} width={500} />
                    </div>

                  <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"15px"}} >
                    <div>
                        <h1>Heading</h1>
                        <p style={{marginTop:"15px",opacity:"0.7"}}>30 euro / Piece .REF:VABGN5 </p>
                    </div>

                    <div>
                        <h1>0</h1>
                        <div style={{backgroundColor:"white",borderRadius:"25px",padding:"5px"}} >21 pieces</div>
                    </div>
                  </div>
                  </div>



                </div>

             
                    <div style={{width:"100%",display:"grid",placeItems:"center",backgroundColor:"#dedede",marginTop:"15px",padding:"45px"}}>


                    <h1>On so'cuppe de <span style={{color:"blue",fontWeight:"bold"}} >tout</span></h1>
                    <p style={{marginBottom:"",opacity:"0.6"}}>Office ipsum you must be muted , it meeting commitment busy pain</p> 
                    </div>

                    

                      

                       <Row style={{display:"flex",justifyContent:"center",backgroundColor:"#dedede",padding:"105px"}}>

                        <Col xl = {3} lg = {3}  xs = {12}  sm = {12}>

                        <div style={{display:"grid",placeItems:"center",}} > 
                        <CiShoppingCart  size={70}/>
                        <p></p> 
                        <h4 className="marginLeftOnMobile">Livirasion & Reprise</h4>
                        <p style={{opacity:"0.7"}}>selon vos besonis</p>

                        </div> 



                         

                        </Col>

                        <Col xl = {3} lg = {3}  xs = {12}  sm = {12}>
                        <div style={{display:"grid",placeItems:"center"}} > 
                        <FaWineGlass size={70}/>
                        <p></p>
                        <h4 className="" >Nettoyage</h4>
                        <p style={{opacity:"0.7"}}>selon vos besonis</p>

                        </div>

                        </Col> 

                        


                        <Col xl = {3} lg = {3}  xs = {12}  sm = {12}>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} > 
                        <MdOutlineMonitor size={70}/>
                        <p></p>
                        <h4 className="marginLeftOnMobile">Commande IIImitee</h4>
                        <p style={{opacity:"0.7"}} >Tout est possible</p>

                        </div>
                        </Col> 

                        

 
                        <Col xl = {3} lg = {3} xs = {12} sm = {12}>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} > 
                        <FaCarSide size={70}/>
                        <p></p>
                        <h4 className="marginLeftOnMobile">Transport & Enlevement</h4>
                        <p style={{opacity:"0.7"}}>On so'cuppe de tout</p>

                        </div>
                        </Col> 

                      

                        </Row>
                      


                     <div>

                    </div>

                    <p></p>

                    <Row style={{marginTop:"45px"}} >

                      
                        <Col lg ={6} sm={12} style={{height:"auto"}}> 
                        <Image src = {myImage3} alt="wdawdawdaw" height={500} width={500} />
                        </Col>

                        
                        
                        
                        <Col lg ={6} sm={12} style={{height:"auto"}}> 

                        <div className="marginToPonMobile" style={{backgroundColor:"#dedede",padding:"35px",borderRadius:"15px"}}>
                        <h1>Some Tags <span style={{color:"blue"}} >10%</span></h1>
                          <p>ompiled in 182ms (872 modules)
                          Only plain objects can be passed to Client Components from Server Components. Module objects are not supported.</p> 
                          
                          <div style={{display:"flex",backgroundColor:"#dedede"}}>
                            <p></p>
                            <input style={{width:"100%",height:"30px",border:"0px solid",borderRadius:"15px",padding:"30px",backgroundColor:"white"}} placeholder="John@doe.com"/>

                            <Button style={{height:"60px",marginLeft:"20px",borderRadius:"15px",paddingRight:"15px",paddingLeft:"15px",opacity:"0.8"}}>INCSRIER</Button>
                        
                        </div>
                            
                        </div>
                            
                        
                        </Col>
                    </Row>



                    <div  style={{height:"auto",padding:"50px",width:"100%",justifyContent:"space-between",display:"flex",marginTop:"180px",backgroundColor:"#dedede"}}>
                       
                       
                        <div className="scrollOnMobile" style={{width:"100%",display:"flex",height:"auto",justifyContent:"space-between"}}>
                      
                                <div style={{display:"flex",gap:"15px",justifyContent:"center",alignItems:"center"}} >
                                    
                                      
                                <Image src = {logo} alt="wdawdawdaw" height={100} width={100} />
                              
                              

                                      <div style={{margin:"15px"}}> 
                                        <h3>INFOS PRATIQUES</h3>
                                        <p> A propos.</p> 
                                        <p>Livrasions & Reprises</p> 
                                        <p> Mode d'emploi</p> 
                                        <p>FAQ</p> 

                                      </div>
                                  

                                      <div style={{margin:"15px"}}> 
                                        <h3>LEGAL</h3>
                                      <p>Mentions legales</p> 
                                      <p>CGU</p> 
                                      <p>CGV</p> 
                                      <p>Politque de Confidentiallie</p> 

                                      </div>

                              
                                      <div style={{margin:"15px"}}> 
                                        <h3>Mon Compte</h3>
                                      <p>Acceder a Mon Compte</p>
                                      <p>Ma liste de'enive</p> 
                                      <p>Creer Un Compte</p> 

                                      <p>mot de passe oublie</p> 

                                      </div>


                              
                              
                                </div> 
        
                    

                  
                     </div>

 
                     <div style={{width:"30%",marginLeft:"45px"}}>
                       
                       <p>some tags</p>

                       <div style={{display:"flex"}} >
                         <CiTwitter size = {30} /> 
                         <CiInstagram size = {30}/>
                         <CiLinkedin size = {30}/>
                       </div>


                     </div>



                    </div>

             
            </div>

            
    
    </div>
  );
}
