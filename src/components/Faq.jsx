import Accordion from 'react-bootstrap/Accordion';
import {faqData} from "../utils/faqData.jsx"
import "../styles/faq.css"
function Faq(){
    
    return(
        <div style = {{paddingBottom:"60px", paddingTop:"50px"}}>
 <h3>Everything you need to know, all in one place.</h3>
      <h1 className = "mb-4">Frequently asked questions.</h1>
     
     
<Accordion defaultActiveKey="0" flush style = {{border:"1px solid #0096A6",borderRadius:"5px"}}>
   
          {
            faqData.map((data)=>{
                return <Accordion.Item eventKey={data.id} className="custom-accordion-item">
                    <Accordion.Header style = {{backgroundColor:"#f0fffd"}}>{data.question}</Accordion.Header>
        <Accordion.Body>
          {data.reply}
        </Accordion.Body>
         </Accordion.Item>
                
            })
          }
        
     
     
    </Accordion>
  
      </div>
    )
}
export default Faq