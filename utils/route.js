import React from 'react';
import { useRouter } from 'next/router';

export default function Route(props) {
  const router = useRouter();
  const { path, children } = props;
  const render = (visible, children) => {
    return visible ? children : <div />
  }
  return (
    <div>
      {render(path === router.pathname, children)}
    </div>
  )
}
