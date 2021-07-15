/* eslint-disable no-debugger */

const workerContext = self;

function messageReceived(response) {
  debugger;

  const buffer = response.data;
  const decoder = new TextDecoder();

  const object = JSON.parse(decoder.decode(buffer));

  workerContext.postMessage(object);
}

workerContext.onmessage = messageReceived;