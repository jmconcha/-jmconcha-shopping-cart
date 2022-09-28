import React from 'react';

interface ViewProps {
  message: string;
}

function View(props: ViewProps) {
  return <div>{props.message}</div>;
}

export default View;
