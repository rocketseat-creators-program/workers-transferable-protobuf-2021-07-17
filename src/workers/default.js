/* eslint-disable no-debugger */

const workerContext = self;

function messageReceived(response) {
  debugger;

  workerContext.postMessage(response.data);
}

workerContext.onmessage = messageReceived;