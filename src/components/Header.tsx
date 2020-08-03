import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu, Box } from "grommet";
import { useSelectLanguage } from "~/contexts/language";

import "./header.scss";

const StyledMenu = styled(Menu)`
  text-decoration: underline;
  color: black;
`;

interface Props {
  links?: Array<JSX.Element>;
  showLanguageSelect?: Boolean;
}

const Header: React.FC<Props> = ({ links = [], showLanguageSelect }) => {
  const [language, setLanguage, languageOpts] = useSelectLanguage();
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/usdr_logo_black.svg" alt="USDR Logo" />
        </Link>

        {showLanguageSelect && (
          <Box background={{ dark: false }}>
            <StyledMenu
              label={
                languageOpts.find((lang) => lang.value === language)!.title
              }
              items={languageOpts.map((lang) => ({
                label: lang.title,
                onClick: () => {
                  setLanguage(lang.value);
                },
              }))}
            />
          </Box>
        )}
      </div>
    </nav>
  );
};

export default Header;
