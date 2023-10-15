import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentConatiner: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  topContainer: {
    width: 250,
    height: 80,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  topMiddleContainer: {
    width: 193,
    height: 48,
    backgroundColor: 'yellow',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  textStyle: {
    color: 'black',
    fontWeight: '700',
  },

  bottomContainer: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomMiddleContainer: {
    top: -16,
    width: 229,
    height: 10,
    backgroundColor: '#CDB900',
  },

  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 24,
    borderTopWidth: 48,
    borderRightColor: 'transparent',
    borderTopColor: 'yellow',
  },

  triangleCornerBottomRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 24,
    borderTopWidth: 48.5,
    borderRightColor: 'transparent',
    borderTopColor: 'yellow',
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    left: 5,
    overflow: 'hidden'
  },

  triangleCornerBottomLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 48.5,
    borderTopWidth: 24,
    borderRightColor: 'transparent',
    borderTopColor: 'yellow',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    right: -7,
  },

  triangleCornerTopRight: {
    position: 'absolute',
    left: 3,
    top: -15,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 10,
    borderTopWidth: 6,
    borderRightColor: 'transparent',
    borderTopColor: '#CDB900',
    transform: [{rotate: '90deg'}],
  },

  triangleCornerTopLeft: {
    position: 'absolute',
    right: 4.5,
    top: -16,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 6,
    borderTopWidth: 10,
    borderRightColor: 'transparent',
    borderTopColor: '#CDB900',
  },

  baseContainer: {
    width: 175,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -10,
  },

  baseMiddleContainer: {
    width: 175,
    zIndex: -10,
    height: 48,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  baseTriangleCornerBottomRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 24,
    borderTopWidth: 48.5,
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    transform: [{rotate: '180deg'}],
    position: 'absolute',
    left: -24,
  },

  baseTriangleCornerBottomLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 48.5,
    borderTopWidth: 24,
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    right: -36,
  },

  shineContainer: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    top: 0,
  },

  shine1Conatiner: {
    right: -10,
  },

  shine1Small: {
    right: -18,
  },

  shine2Small: {
    right: -14,
  },
});

export default styles;
