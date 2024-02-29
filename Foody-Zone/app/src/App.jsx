import styled from "styled-components";

const App = () => {
  return (
  <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo"/>
      </div>
      <div className="search">
        <input
          placeholder="Search Food..."
        />
      </div>
    </TopContainer>
  </MainContainer>);
};

export default App;

const MainContainer = styled.div `

background-color: #323334;

`;

const TopContainer = styled.section``;