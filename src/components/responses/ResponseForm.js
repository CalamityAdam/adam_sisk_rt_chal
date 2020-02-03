import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * ResponseForm styles
 */
const Form = styled.form`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 10px;

  button {
    display: inline-block;
    height: 28px;
    padding: 0 30px;
    color: ${props => props.theme.shuttlegray};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid ${props => props.theme.shuttlegray};
    background-color: transparent;
    box-shadow: ${props => props.theme.bs};
    cursor: pointer;
  }
  button.submit {
    color: ${props => props.theme.offwhite};
    border: 1px solid ${props => props.theme.blue};
    background-color: ${props => props.theme.blue};
  }
  button.cancel {
    color: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.gray};
    background-color: transparent;
  }
`;
const ContentTextarea = styled.textarea`
  height: 8.4rem;
  width: 75%;
  padding: 6px 10px;
  font-size: 1.8rem;
  background-color: ${props => props.theme.offwhite};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  box-shadow: inset 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: ${props => props.theme.bs};
  box-sizing: border-box;
`;
const BottomRow = styled.div`
  display: grid;
  grid-template-columns: minmax(80px, min-content) min-content min-content;
  grid-template-rows: auto;
`;
const NameInput = styled.input`
  height: 28px;
  width: 200px;
  padding: 6px 10px;
  margin-right: 10px;
  font-size: 1.4rem;
  background-color: ${props => props.theme.offwhite};
  border: 1px solid ${props => props.theme.gray};
  border-radius: 5px;
  box-shadow: inset 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: ${props => props.theme.bs};
  box-sizing: border-box;
`;

/**
 * props: {
 *   response: { response } || null,
 *   postResponse: fn(),
 *   setEditing: fn(),
 * }
 */
function ResponseForm({ response, postResponse, setEditing }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  response && setContent(response.content);
  response && setAuthor(response.author);
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      content,
      author,
    };
    if (response) {
      formData.id = response.id;
    }
    postResponse(formData);
  }
  return (
    <Form>
      <ContentTextarea
        placeholder="Thanks for the feedback!"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <BottomRow>
        <NameInput
          placeholder="Riley Responder"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          submit
        </button>
        {/* only display cancel button if editing an existing response */
        response && (
          <button
            type="button"
            className="cancel"
            onClick={() => setEditing(false)}
          >
            cancel
          </button>
        )}
      </BottomRow>
    </Form>
  );
}

export default ResponseForm;
