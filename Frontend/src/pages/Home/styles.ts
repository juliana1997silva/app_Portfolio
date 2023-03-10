import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 70px 0 20px;

  > svg {
    position: absolute;
    font-size: 200px;
    color: black;
    bottom: -215px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .containerHome {
    display: flex;

    .containerText {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-items: center;
      margin: 225px auto;
      text-align: center;
      width: 100%;
      max-width: 1156px;
      height: 425px;

      .homeTextContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        h1 {
          font-size: 60px;
          font-weight: 400;
          text-align: center;
          span {
            color: #8e01a7;
          }
        }
        .homeDescription {
          margin: 16px 16px 0px;
          h1 {
            line-height: 2.2rem;
            font-size: 17px;
            font-weight: normal;
          }
        }

        h3 {
          line-height: 24px;
          margin-top: 16px;
          text-align: center;
          color: #fff;
        }
      }

      .welcomeText {
        h1 {
          line-height: 2.2rem;
          font-size: 17px;
          color: #8e01a7;
          font-weight: normal;
          margin: 16px 0px 0px 0px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 20px 0 20px;

    .buttonSeeProjects {
      font-size: 13px !important;
    }

    .containerHome {
      display: flex;
      justify-content: center !important;

      .socialMedia {
        display: none;
      }

      .containerText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-items: center;
        margin: 200px auto 100px auto;
        text-align: center;
        width: 100%;
        max-width: 1156px;
        height: 425px;

        .homeTextContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          h1 {
            font-size: 35px;
            font-weight: 400;
            text-align: center;
            span {
              color: #8e01a7;
            }
          }
          .homeDescription {
            margin: 16px 16px 0px;
            h1 {
              line-height: 2.2rem;
              font-size: 13px;
              font-weight: normal;
              br {
                display: none;
              }
            }
          }

          h3 {
            line-height: 24px;
            margin-top: 16px;
            text-align: center;
            color: #fff;
          }
        }

        .welcomeText {
          h1 {
            line-height: 2.2rem;
            font-size: 13px;
            color: #8e01a7;
            font-weight: normal;
            margin: 16px 0px 0px 0px;
          }
        }
      }
    }
  }
`;
