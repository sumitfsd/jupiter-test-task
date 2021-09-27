import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border: 1px solid rgba(215, 215, 215, 0.5);
`;

export const HeaderBody = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 6rem;
`;

export const LogoContainer = styled.div`
  width: 20%;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const OptionsWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  padding-left: 5rem;
  width: 50%;
`;

export const GetButton = styled.button`
  background: #1a1a1a;
  border: none;
  color: #fff;
  padding: 0.6rem;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 0.7rem;
`;

export const OptionsListWrapper = styled.ul`
  display: flex;
  list-style: none;
  width: 47%;
  justify-content: space-between;
  align-items: center;
`;

export const OptionType = styled.li`
  width: 5rem;
  text-align: center;
  color: #777777;
  cursor: pointer;
  font-size: 0.8rem;
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: -4rem;
  font-size: 1.5rem;
  transform: translate(-50%, -37%);
  color: #ddd;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem 2rem;
  border: 1px solid #eeeeee;
  outline: none;
  border-radius: 1px;
`;
export const Cartcontainer = styled.div`
  padding: 2rem;
`;

// .headerIcon{
//     width: 2rem;
//     color: #777777;
//     height: 2rem;
// }
