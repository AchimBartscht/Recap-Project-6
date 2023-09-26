import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "../components/Form.js";
import { StyledLink } from "../components/StyledLink.js";
import useSWR from SWR

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  export default function addPlace(place) {
    const {mutate} = use
    console.log("Place added (but not really...)");
  }

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}
