import {
  FooterContainer,
  FooterUl,
  FooterTitle,
  FooterWrap,
  FooterUlWrap,
} from "./FooterForm.style";

const FooterForm: React.FC = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTitle>Contect</FooterTitle>
        <FooterUl>
          <li
            onClick={() => window.open("https://ldh3907.notion.site", "_blank")}
          >
            Notion
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100014551603753",
                "_blank"
              )
            }
          >
            Facebook
          </li>
          <li
            onClick={() =>
              window.open(
                "https://www.instagram.com/do0ng_hyun/?hl=kokslajdalkdjwi",
                "_blank"
              )
            }
          >
            Instagram
          </li>
          <li
            onClick={() => window.open("https://github.com/ldh3907", "_blank")}
          >
            Github
          </li>
          <li onClick={() => window.alert("ldh165163@gmail.com")}>Gmail</li>
        </FooterUl>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterForm;
