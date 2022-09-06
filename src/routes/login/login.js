import { useRef } from "react";
import tw, { styled } from "twin.macro";

const FormContainer = styled.div`
  ${tw`h-screen flex flex-col items-center justify-center`}
`;

const Form = styled.div`
  ${tw`border border-gray-300 p-10`}
`;

const Input = styled.input`
  ${tw`text-sm w-full mr-3 py-5 px-3 h-2 border border-gray-900 rounded mb-4`}
`;

const Label = styled.label`
  ${tw`block text-sm font-medium text-gray-900 dark:text-gray-300`}
`;

const SubmitButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}
`;

export default function Login() {
  const nameRef = useRef();
  const passRef = useRef();

  function handleClick() {
    alert(passRef.current.value);
  }

  return (
    <FormContainer>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" ref={nameRef}></Input>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          ref={passRef}
        ></Input>
        <SubmitButton onClick={handleClick}>Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
}
