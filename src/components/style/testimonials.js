import styled from "styled-components";

const TestimonialsSection = styled.section`
  margin-top: 200px;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    width: 45px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--background-secondary);
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms ease-in;  

    svg {
      color: var(--text-primary);
    }
    
    &:hover:enabled {
      cursor: pointer;
      background-color: #454545;
      transition: all 150ms ease-in;

      svg {
        color: var(--brand-primary);
        transition: all 150ms ease-in;
      }
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
`;

const TestimonialItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  
  .testimonial {
    flex: 1;
    width: fit-content;
    max-width: 528px;
    margin: 70px 28px 0 28px;
    
    p {
      font-size: 20px;
      font-weight: 400;
      font-style: italic;
      line-height: 32px;
      letter-spacing: 0.05ch;
      color: var(--text-primary);
      margin-bottom: 28px;
      position: relative;
      
      &:before {
        content: '';
        height: 96%;
        width: 4px;
        background-color: var(--brand-primary);
        position: absolute;
        left: -28px;
        top: 4px;
      }

      .semi-circle-revert {
        position: absolute;
        left: -72px;
        bottom: -55px;
      }
    }

    .testimonial-decoration {
      transform: translateX(-30px);
    }

  }
`;

const UsersWrapper = styled.div`
  width: 100%;
  margin-top: 62px;
  display: flex;
  align-items: center;
  gap: 172px;

  .user {
    display: flex;
    align-items: center;
    gap: 24px;
    
    .avatar {
      width: 64px;
      aspect-ratio: 1;
      border-radius: 50%;
    }
    
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
      
      h3 {
        font-size: 20px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0.05ch;
        color: var(--text-primary);
      }

      span {
        font-size: 14px;
        font-weight: 500;
        line-height: 22.4px;
        letter-spacing: 0.04ch;
        text-transform: uppercase;
        color: var(--brand-primary);
      }
    }
  }
`;

export {
  TestimonialsSection,
  NavigationWrapper,
  TestimonialItems,
  UsersWrapper
};