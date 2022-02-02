import React, { useContext } from "react";
// import { BurgerStyles } from "../styles/NavStyles";
import MenuContext from "./MenuContext";
import tw, { styled, css } from "twin.macro";

const BurgerStyles = styled.button(() => [
  tw`flex sm:hidden z-[11]`,
  css`
    border: none;
    background: none;
    width: 24px;
    height: 21px;
    position: relative;
    padding: 0;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    outline: none;

    &:hover {
      opacity: 1;
    }

    span {
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      top: 50%;
      left: 0;
      background-color: var(--paleBlue);
      transition: transform 0.5s ease, background-color 0.5s ease 0.3s;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--paleBlue);
        animation-name: topLineBurger;
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-fill-mode: forwards;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--paleBlue);
        animation-name: bottomLineBurger;
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        animation-fill-mode: forwards;
      }
    }

    &.open {
      span {
        background-color: transparent;
        transition: background-color 0.3s ease;

        &:before {
          animation-name: topLineCross;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
          animation-fill-mode: forwards;
        }

        &:after {
          animation-name: bottomLineCross;
          animation-duration: 0.6s;
          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
          animation-fill-mode: forwards;
        }
      }
    }

    @keyframes topLineCross {
      0% {
        transform: translateY(-9px);
      }

      50% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(0px) rotate(45deg);
      }
    }

    @keyframes bottomLineCross {
      0% {
        transform: translateY(9px);
      }

      50% {
        transform: translateY(0px);
      }

      100% {
        transform: translateY(0px) rotate(-45deg);
      }
    }

    @keyframes topLineBurger {
      0% {
        transform: translateY(0px) rotate(45deg);
      }

      50% {
        transform: rotate(0deg);
      }

      100% {
        transform: translateY(-9px) rotate(0deg);
      }
    }

    @keyframes bottomLineBurger {
      0% {
        transform: translateY(0px) rotate(-45deg);
      }

      50% {
        transform: rotate(0deg);
      }

      100% {
        transform: translateY(9px) rotate(0deg);
      }
    }
  `,
]);

const BurgerBtn = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <BurgerStyles
      onClick={toggleNav}
      type="button"
      className={isOpen ? "open" : "closed"}
      aria-label="Menu button"
    >
      <span></span>
    </BurgerStyles>
  );
};

export default BurgerBtn;
