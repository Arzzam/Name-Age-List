import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const StyledGitHub = styled(GitHubIcon)`
  color: rgb(51, 51, 51) !important;

  & :hover {
    color: #4f005f !important;
  }
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  color: rgb(51, 51, 51) !important;

  & :hover {
    color: #4f005f !important;
  }
`;

const StyledInsta = styled(InstagramIcon)`
  color: rgb(51, 51, 51) !important;

  & :hover {
    color: #4f005f !important;
  }
`;

function ContactIcons() {
  return (
    <div>
      <Link href="https://github.com/Arzzam" target="_blank">
        <StyledGitHub className="icons" />
      </Link>
      <Link href="https://www.linkedin.com/in/arzzam19/" target="_blank">
        <StyledLinkedIn className="icons" />
      </Link>
      <Link href="https://www.instagram.com/arz_zam/" target="_blank">
        <StyledInsta className="icons" />
      </Link>
    </div>
  );
}

export default ContactIcons;
