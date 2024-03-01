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
    <FilterContainer>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>

    <FoodCardsContainer>
      <FoodCards></FoodCards>
    </FoodCardsContainer>
  </MainContainer>);
};

export default App;

const MainContainer = styled.div `

background-color: #323334;

`;

const TopContainer = styled.section`

min-height: 140px;
display:flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0px 10px;
  }
}

`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
`;

const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border:none;
  color: white;
`;

const FoodCardsContainer = styled.section`
height: calc(100vh - 170vh);
background-image: url("/bg.png");
background-size: cover;

`;
const FoodCards = styled.section``;
