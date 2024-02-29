import styled from "styled-components";

const UpdateSection = styled.section`
  margin-top: 200px;

  .row-space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 96px;

    .col:first-child {
      max-width: 604px;
    }

    .col:last-child {
      max-width: 420px;

      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0.04ch;
        margin-bottom: 26px;
        color: var(--text-secondary);
      }
    }
  }

  .blogs {
    width: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .blog {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 36px;
      counter-increment: item 1;

      svg {
        min-width: 24px;
        max-width: 26px;
        aspect-ratio: 1;
        color: var(--text-primary);
        transform: rotate(-40deg);

        &:hover {
          cursor: pointer;
          color: var(--brand-primary);
        }
      }
    }

    .blog-img {
      min-width: 260px;
      min-height: 176px;
      margin-left: 75px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }

      &:before {
        content: "0" counter(item) ".";
        font-family: "Plus Jajarta Sans", sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: 0.08ch;
        color: var(--text-secondary);
        position: absolute;
        top: calc(50% - 12px);
        left: -75px;
      }
    }

    .blog-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 14px;

      b {
        font-size: 14px;
        font-weight: 400;
        line-height: 17.64px;
        letter-spacing: 0.04ch;
        text-decoration: underline;
        color: var(--text-primary);
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25.2px;
        letter-spacing: 0.02ch;
        color: var(--text-primary);
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22.68px;
        letter-spacing: 0.04ch;
        color: var(--text-secondary);
      }
    }

    .horizontal-line {
      display: inline-block;
      width: 100%;
      height: 1px;
      background-color: var(--light-gray);
      opacity: 0.2;
    }
  }
`;

export default UpdateSection;