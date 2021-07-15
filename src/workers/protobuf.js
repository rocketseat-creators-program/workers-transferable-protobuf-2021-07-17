/* eslint-disable no-debugger */

import Pbf from 'pbf';
import userProto from './user.proto';

const workerContext = self;

const User = userProto.User;

function messageReceived(response) {
  debugger;

  const buffer = response.data;

  var pbf = new Pbf(buffer);
  var object = User.read(pbf);

  workerContext.postMessage(object);
}

workerContext.onmessage = messageReceived;