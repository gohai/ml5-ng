import neuralNetwork from "./NeuralNetwork";
import testNetwork from "./TestNetwork";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import p5Utils from "./utils/p5Utils";

export default Object.assign(
  { p5Utils },
  {
    tf,
    tfvis,
    neuralNetwork,
    testNetwork,
  }
);
