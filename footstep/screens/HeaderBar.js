import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image,Dimensions,Animated,SafeAreaView,Platform } from 'react-native';

// 根據手機螢幕調整尺寸
const { height, width } = Dimensions.get('window');

class HeaderBar extends Component {

    // For android Top navigation 上方位置的修正
      componentWillMount() {
  
          this.scrollY = new Animated.Value(0)
  
          this.startHeaderHeight = 103;
          this.endHeaderHeight = 80;
  
          if (Platform.OS == 'android') {
              this.startHeaderHeight = 70 + StatusBar.currentHeight;
              this.endHeaderHeight = 40 + StatusBar.currentHeight;
          }
  
          this.animatedHeaderHeight = this.scrollY.interpolate({
              inputRange:[0,30],
              outputRange: [this.startHeaderHeight, this.endHeaderHeight],
              extrapolate: 'clamp'
          })
  
          this.animatedOpacity = this.animatedHeaderHeight.interpolate({
              inputRange:[this.endHeaderHeight, this.startHeaderHeight],
              outputRange:[0,1],
              extrapolate:"clamp"
          })
  
          this.animatedTagTop = this.animatedHeaderHeight.interpolate({
              inputRange:[this.endHeaderHeight, this.startHeaderHeight],
              outputRange:[0,8.5],
              extrapolate:"clamp"
          })
  
          this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
              inputRange: [this.endHeaderHeight, this.startHeaderHeight],
              outputRange: [50, 30],
              extrapolate: 'clamp'
          })
  
      }
  
      render() {
          return (
            
              // SafeAreaView 避掉 iphone x 的瀏海
              // 上方Top navigation coding demo
              <SafeAreaView style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}>
                      <Animated.View
                          style={{
                              height: this.animatedHeaderHeight,
                              backgroundColor: 'white',
                              borderBottomWidth: 1,
                              borderBottomColor: '#B7B7B7'
                          }}
                      ></Animated.View>
                  </View>
              </SafeAreaView>
          );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        },
      });
    export default HeaderBar;