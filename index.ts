import { NativeModules } from 'react-native';

export default (() => {

  const activate = () => {
    NativeModules.KCKeepAwake.activate();
  }

  const deactivate = () => {
    NativeModules.KCKeepAwake.deactivate();
  }

  return {
    activate,
    deactivate
  };
})()
