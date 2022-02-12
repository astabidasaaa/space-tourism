import React from "react";
import { Helmet } from "react-helmet";
import { BackgroundImg, MainSection } from "../styles/MainSection";
import destinationBg from "../images/destination-bg.png";
import tw, { styled } from "twin.macro";

const CodedBy = styled.h5(() => [tw`mt-4 tracking-[8px]`]);

const LinkSngkr = styled.a(() => [
  tw`underline hover:no-underline text-[var(--paleBlue)]`,
]);

const credit = () => {
  return (
    <MainSection page="credit">
      <Helmet title="Who built this?" />
      <BackgroundImg backgroundImage={destinationBg} />
      <p className="tech-title">
        Frontend Mentor - Space Tourism Website Solution
      </p>
      <CodedBy>
        coded by{" "}
        <LinkSngkr
          href="https://sngkr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          sngkr
        </LinkSngkr>
      </CodedBy>
    </MainSection>
  );
};

export default credit;
