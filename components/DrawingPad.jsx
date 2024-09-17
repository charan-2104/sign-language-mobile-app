import React, { useState } from 'react';
import { Dimensions, Image, PanResponder, StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import icon from "../constants/icons";

const DrawingPad = () => {
  const [paths, setPaths] = useState([]);
  const [isErasing, setIsErasing] = useState(false);

  const { width, height } = Dimensions.get('window');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setPaths([...paths, { d: `M${locationX},${locationY}`, color: isErasing ? 'white' : 'black' }]);
    },
    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      if (isErasing) {
        erasePath(locationX, locationY);
      } else {
        const newPaths = [...paths];
        newPaths[newPaths.length - 1].d += ` L${locationX},${locationY}`;
        setPaths(newPaths);
      }
    }
  });

  const erasePath = (x, y) => {
    const updatedPaths = paths.map((path) => {
      if (path.color === 'black') {
        if (isCloseToEraser(x, y, path.d)) {
          return { ...path, color: 'white' };
        }
      }
      return path;
    });
    setPaths(updatedPaths);
  };

  const isCloseToEraser = (x, y, pathData) => {
    return true; // Simplified for demonstration
  };

  const toggleEraseMode = () => {
    setIsErasing(!isErasing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer} {...panResponder.panHandlers}>
        <Svg height="100%" width="100%" style={styles.canvas}>
          {paths.map((path, index) => (
            <Path
              key={index}
              d={path.d}
              stroke={path.color}
              strokeWidth={isErasing ? 10 : 2}  // Adjust stroke width for erasing
              fill="none"
            />
          ))}
        </Svg>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleEraseMode}>
            <Image source={isErasing ? icon.pen : icon.eraser} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d3d1',  // Background color for the main container
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvasContainer: {
    flex: 1,
    width: '90%',  // Leave 5% space on both left and right
    height: '90%', // Leave 5% space on top and bottom
    backgroundColor: '#E0F2F1', // stone-100 background color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    position: 'relative', // Required for absolute positioning of the button
  },
  canvas: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Ensure button is above the canvas
  },
});

export default DrawingPad;
