import React from 'react';

import { RouteComponentProps } from 'react-router';
import { store } from '../store/store';
import { showMessage } from '../store/slices/UserMessageSlice';

export const Home: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {

  const testMessage = (): void => {
    store.dispatch(showMessage({
      messageType: "info",
      message: "HI!!!!"
    }));
  }

  return (
    <div>
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Public Page</h2>
              <p className="lead">This page is public</p>
              <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
              <button onClick={testMessage} className="btn btn-primary">Test Alert Message</button>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}
