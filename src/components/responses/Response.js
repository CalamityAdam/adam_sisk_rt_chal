import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ResponseForm, ResponseDetails } from './index';
import { ReactComponent as ResponseLogo } from '../../svg/response.svg';
import { ReactComponent as Ellipsis } from '../../svg/ellipsis.svg';
import { BACKEND_URL } from '../../App';
import { useStateValue } from '../../store/state';
import { SET_REVIEW_TO_RESPONDED } from '../../store/actions';

/**
 * Response styles
 */
const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto 80px;
  background-color: ${props => props.theme.offwhite};
  padding: 35px 0;
  border-radius: ${props => props.theme.br};
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
  .tooltip {
    position: relative;
    display: inline-block;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    font-size: 1.8rem;
    opacity: 0;
    transition: opacity 0.6s;

    position: absolute;
    z-index: 1;
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

/**
 * props: {
 *   reviewId: " ",
 * }
 */
function Response({ reviewId }) {
  /**
   * state: {
   *   editing: bool,
   *   response: { response } || null
   * }
   */
  const [editing, setEditing] = useState(false);
  const [response, setResponse] = useState(null);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    function fetchResponse() {
      fetch(`${BACKEND_URL}/responses?review_id=${reviewId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(response => {
          const foundResponse = response[0];
          if (!foundResponse) {
            setEditing(true);
            return;
          }
          setResponse(foundResponse);
        })
        .catch(err => console.error(err));
    }

    fetchResponse();

    // cleanup function
    return function cleanup() {
      setEditing(false);
      setResponse(null);
    };
  }, [reviewId]);

  function setReviewToResponded(id) {
    dispatch({
      type: SET_REVIEW_TO_RESPONDED,
      id,
    })
  }
  
  /**
   * data: {
   *   content: " ",
   *   author: " ",
   *   published_at: " date "
   * }
   */
  function postResponse(data) {
    data.review_id = reviewId;
    data.published_at = data.published_at || new Date();
    /**
     * if an ID was sent along with the data, then this is an existing response
     * and request should be of method PUT to /responses/:id
     * else POST to /responses
     */
    fetch(`${BACKEND_URL}/responses${data.id ? `/${data.id}` : ''}`, {
      method: data.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(resp => {
        setEditing(false);
        setResponse(resp);
        setReviewToResponded(reviewId);
      })
      .then(err => console.error(err));
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
      <div role="button" className="clickable tooltip" onClick={handleEllipsisClick}>
        <Ellipsis tabIndex="1" className="icon" />
        <span className="tooltiptext">
          {editing ? 'Cancel edit' : 'Edit response'}
        </span>
      </div>
    </Container>
  );
}

export default Response;
