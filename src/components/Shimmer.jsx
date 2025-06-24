import {Container, Row, Col} from "react-bootstrap"
function Shimmer(){
    return(
<div style = {{marginTop:"150px"}}>
<Container>
    <Row className = "d-flex justify-content-evenly d-none d-lg-block">
       
        {[1,2, 3, 4,5].map((key)=>{
            return(
                 <Col key  = {key} xs = {2}>
<p className = "bg-body-secondary" style = {{height:"200px",width:"200px",borderRadius:"100%", backgroundColor:"lightblue"}}></p>
                 </Col>
            )
            
        })}
       
    </Row>
    <Row className   ="mt-4">
    <Col xs= {12} >
        <h1 style = {{width:"300px", padding:"10px",borderRadius:"5px"}} className = "bg-body-secondary my-2"></h1>
     <h1 style = {{width:"200px", padding:"10px",borderRadius:"5px"}} className = "bg-body-secondary mt-2"></h1>
    </Col>
        {[1,2,3,4,5,6,7,8].map((key)=>{
            return(
                <Col key = {key} xs={6} sm={6} md={4} lg={4} xl={3} >
                    <p className = "bg-body-secondary" style = {{height:"300px",gap:"15px", backgroundColor:"lightblue", borderRadius:"5px"}}></p>
                </Col>
            )
        })}
    </Row>
</Container>
</div>
    )
}
export default Shimmer






