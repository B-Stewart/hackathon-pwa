/** @jsx jsx */
import React, { Component, useEffect, useCallback, useState } from "react";
import logo from "./logo.svg";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Toast = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background-color: #000000;
  opacity: 0.8;
  border-radius: 24px;
  padding: 16px;
  color: white;
`;
// https://codedaily.io/tutorials/72/Creating-a-Reusable-Window-Event-Listener-Hook-with-useEffect-and-useCallback
export const useSWStateChange = callback => {
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("swmessage", callback);

    return () => window.removeEventListener("swmessage", callback);
  }, [callback]);
};

const Title = styled.div`
  text-align: "center";
`;

export const SWNotifier = () => {
  // By doing this we prevent the listener from being reregistered multiple times.
  const callback = useCallback(e => {
    console.log("callback message", e);
    setMessageState(e.detail);
  }, []);

  useSWStateChange(callback);
  const [message, setMessage] = useState(null);

  const setMessageState = message => {
    setMessage(message);
    console.log("message set", message);
    setTimeout(() => {
      setMessage(null);
    }, 10000);
  };

  return message ? (
    <Toast onClick={() => setMessage(null)}>
      <Title>{message}</Title>
    </Toast>
  ) : null;
};
