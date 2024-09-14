import React, { useState } from 'react';
import { View, PanResponder, Dimensions, StyleSheet, Button } from 'react-native';
import Svg, { Path } from 'react-native-svg';

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
      // Create a new path that excludes the erased segments
      // Simplified example, you might need to use more advanced geometry to precisely erase
      if (path.color === 'black') {
        // Logic to determine if the path intersects with the eraser
        // This example just clears the path if it's close to the eraser position
        if (isCloseToEraser(x, y, path.d)) {
          return { ...path, color: 'white' }; // Set color to white to simulate erasing
        }
      }
      return path;
    });
    setPaths(updatedPaths);
  };

  const isCloseToEraser = (x, y, pathData) => {
    // This function determines if the given point (x, y) is close enough to the path to be erased
    // Implement your logic here based on pathData and eraser size
    return true; // Simplified for demonstration
  };

  const toggleEraseMode = () => {
    setIsErasing(!isErasing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title={isErasing ? 'Draw' : 'Erase'} onPress={toggleEraseMode} />
      </View>
      <View style={styles.canvasContainer} {...panResponder.panHandlers}>
        <Svg height={height / 2} width={width} style={styles.canvas}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  canvasContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default DrawingPad;
