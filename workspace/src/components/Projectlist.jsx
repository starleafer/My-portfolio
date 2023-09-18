import React from 'react'
import { StyledProjectLIst } from './styled/StyledProjectList'

function Projectlist() {
  return (
    <>
        <StyledProjectLIst>
            <div className='projectContainer'>
                <div className='project'>The chat app</div>
                <div className='project'>The webbshop</div>
                <div className='project'>The movie app</div>
                <div className='project'>Tic tac toe</div>
            </div>
        </StyledProjectLIst>
    </>
    )
}



export default Projectlist