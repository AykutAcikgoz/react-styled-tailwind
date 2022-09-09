import tw, { styled } from "twin.macro";
import { HomeIcon, LinkIcon } from "@heroicons/react/24/outline";

const FlexContainer = styled.div`
  ${tw`flex flex-row`}
`;

const MenuContainer = styled.div`
  ${tw`flex-none w-64 bg-yellow-100 h-screen p-6 overflow-x-auto`}
`;

const ContentContainer = styled.div`
  ${tw`flex-1 h-screen bg-blue-100 p-6`}
`;

const IconContainer = styled.div`
  ${tw`h-6 w-6`}
`;

const MenuItemTextContainer = styled.div`
  ${tw`flex-1 px-4`}
`;

const MenuItemSpace = styled.div`
  ${tw`h-4`}
`;

export default function Layout() {
  return (
    <FlexContainer>
      <MenuContainer>
        <FlexContainer>
          <IconContainer>
            <HomeIcon></HomeIcon>
          </IconContainer>
          <MenuItemTextContainer>Home</MenuItemTextContainer>
        </FlexContainer>
        <MenuItemSpace></MenuItemSpace>
        <FlexContainer>
          <IconContainer>
            <LinkIcon></LinkIcon>
          </IconContainer>
          <MenuItemTextContainer>Explore</MenuItemTextContainer>
        </FlexContainer>
      </MenuContainer>
      <ContentContainer>Content</ContentContainer>
    </FlexContainer>
  );
}
