import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import Shine_1 from '../../images/svg/Shine_1';
import Shine_2 from '../../images/svg/Shine_2';
import Shine_3 from '../../images/svg/Shine_3';
import Shine_4 from '../../images/svg/Shine_4';

import Animated, {
  Easing,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Touchable = Animated.createAnimatedComponent(TouchableOpacity);

const FloatingButton = props => {
  const {
    btnTopColor = 'yellow',
    btnBottomColor = '#CDB900',
    textColor = 'black',
    duration = 2000,
    shineDuration = 2000,
  } = props;

  const animated = useSharedValue(0);

  const animatedShine = useSharedValue(0);

  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animated.value, [0, 1], [0, 10]),
        },
      ],
    };
  }, []);

  const animatedBaseStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(animated.value, [0, 1], [0, -10]),
        },
      ],
    };
  }, []);

  const animatedShineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(animatedShine.value, [0, 1], [-200, 200]),
        },
      ],
    };
  }, []);

  useEffect(() => {
    animated.value = withRepeat(
      withTiming(1, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true,
    );

    animatedShine.value = withRepeat(
      withDelay(
        5000,
        withTiming(1, {
          duration: shineDuration,
          easing: Easing.linear,
        }),
      ),
      -1,
    );
  }, [duration, shineDuration]);

  return (
    <View style={styles.parentConatiner}>
      <Touchable style={[styles.mainContainer, animatedBtnStyle]}>
        <View style={styles.topContainer}>
          <View style={[styles.topMiddleContainer]}>
            <Text style={[styles.textStyle]}>Clain now</Text>

            <Animated.View style={[styles.shineContainer, animatedShineStyle]}>
              <View style={styles.shine1Conatiner}>
                <Shine_2 />

                <View style={styles.shine1Small}>
                  <Shine_3 />
                </View>
              </View>

              <View>
                <Shine_1 />

                <View style={styles.shine2Small}>
                  <Shine_4 />
                </View>
              </View>
            </Animated.View>
          </View>

          <View style={[styles.triangleCornerBottomRight]} />

          <View style={[styles.triangleCornerBottomLeft]} />
        </View>

        <View style={styles.bottomContainer}>
          <View style={[styles.bottomMiddleContainer]}></View>

          <View style={[styles.triangleCornerTopRight]} />

          <View style={[styles.triangleCornerTopLeft]} />
        </View>
      </Touchable>

      <Animated.View
        style={[
          {
            width: 250,
            height: 80,
            zIndex: -10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: -20,
          },
          animatedBaseStyle,
        ]}>
        <View style={styles.baseContainer}>
          <View style={[styles.baseMiddleContainer]} />

          <View style={[styles.baseTriangleCornerBottomRight]} />

          <View style={[styles.baseTriangleCornerBottomLeft]} />
        </View>
      </Animated.View>
    </View>
  );
};

export default FloatingButton;
