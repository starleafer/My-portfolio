import styled from 'styled-components'


export const StyledProjectLIst = styled.div`
.projectContainer{
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    text-align: left;
    
  }

  h4 {
    width: 80%;
    color: #3a406e;
  }

  
  .project{
    display: flex;
    width: 80%;
    height: 70px;
    font-size: 20px;
    color: #3a406e;
    margin-bottom: 20px;
    border: 1px solid #3a406e;
    border-radius: 5px;
    text-align: left;
    align-items: center;
    padding-left: 20px;
    box-shadow: 3px 3px #3a406e;
    
  }

  p {
    margin-left: auto;
    margin-right: 20px; 
  }
  
  .project:hover{
    box-shadow: 6px 6px #3a406e;

  }
  
  `