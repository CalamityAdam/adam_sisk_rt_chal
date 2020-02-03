import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseForm, ResponseDetails } from './index';
import { ReactComponent as ResponseLogo } from '../../response.svg';
import { ReactComponent as Ellipsis } from '../../ellipsis.svg';
import { BACKEND_URL } from '../../App';

/**
 * Response styles
 */
const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto 80px;
  background-color: ${props => props.theme.offwhite};
  padding: 35px 0;
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};

  .icon {
    justify-self: center;
    margin: 5px;
  }
  div.clickable {
    height: 15px;
    width: 25px;
  }
  .clickable:hover {
    cursor: pointer;
  }
`;

/**
 * props: {
 *   reviewId: " ",
 * }
 */
function Response({ reviewId }) {
  const [editing, setEditing] = useState(false);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    console.group('effect ran');
    console.log('reviewId: ', reviewId);
    console.groupEnd()
    function fetchResponse() {
      fetch(`${BACKEND_URL}/responses?review_id=${reviewId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .then(response => {
          console.log('in fetch', response)
          const foundResponse = response[0]
          if (!foundResponse) {
            setEditing(true);
            return;
          }
          setResponse(foundResponse);
        });
    }
    fetchResponse();
    
    return function cleanup() {
      setEditing(false);
      setResponse(null);
    }
  }, [reviewId]);
  
  function postResponse(data) {
    data.review_id = reviewId;
    console.log(data)
    /**
     * if an ID was sent along with the data, then this is an existing response
     * and request should be of type PUT to /responses/:id
     * else POST to /responses
     */
    fetch(`${BACKEND_URL}/responses${data.id ? `/${data.id}` : ''}`, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(resp => {
        setEditing(false);
        setResponse(resp);
        console.log('hi', resp)
      
      });
  }
  function handleEllipsisClick() {
    if (!response) return;
    setEditing(e => !e);
  }
  return (
    <Container>
      <ResponseLogo className="icon" />
      {editing ? (
        <ResponseForm
          response={response}
          postResponse={postResponse}
          setEditing={setEditing}
        />
      ) : (
        response && <ResponseDetails response={response} />
      )}
      <div className="clickable" onClick={handleEllipsisClick}>
        <Ellipsis tabIndex="1" role="button" className="icon" />
      </div>
    </Container>
  );
}

export default Response;
