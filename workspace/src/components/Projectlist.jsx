import React from 'react'
import { StyledProjectLIst } from './styled/StyledProjectList'

function Projectlist() {
  return (
    <>
        <StyledProjectLIst>
            <div className='projectContainer'>
                <h4>Selected works</h4>
                <div className='project'>The chat app <p>&gt;</p></div>
                <div className='project'>The webbshop <p>&gt;</p></div>
                <div className='project'>The movie app <p>&gt;</p></div>
                <div className='project'>Tic tac toe <p>&gt;</p></div>
            </div>
        </StyledProjectLIst>
    </>
    )
}



export default Projectlist