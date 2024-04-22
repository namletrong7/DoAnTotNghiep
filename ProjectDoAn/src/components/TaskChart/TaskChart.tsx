import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "react-native";
import React from "react";

const TaskChart = () => {
  const pieData = [
    { value: 20, color: '#7FFFD4', focused: true},
    {value: 24, color: '#836FFF' },
    { value: 20, color: '#CD853F'},
  ];

  const renderDot = (color:string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  const renderLegendComponent = () => {
    return (
      <View style={{marginLeft:20}}>
        <Text style={{color: 'black',fontSize:15,marginBottom:10,flex:1}}>Bạn có tổng số : 50 công việc</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}>
          {renderDot('#7FFFD4')}
          <Text style={{color: 'black'}}>Đã hoàn thành: 20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
            marginVertical:10
          }}>
          {renderDot('#836FFF')}
          <Text style={{color: 'black'}}>Đang làm: 20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}>
          {renderDot('#CD853F')}
          <Text style={{color: 'black'}}>Quá hạn xử lý: 20</Text>
        </View>
      </View>
    );
  };


  return (
      <View
        style={{
          margin:5,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#e7effb',
        }}>
        <View style={{padding: 20, alignItems: 'center',flexDirection:'row',justifyContent:'space-between'}}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={50}
            innerRadius={35}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 13, color: 'white', fontWeight: 'bold'}}>
                    47%
                  </Text>
                  <Text style={{fontSize: 10, color: 'white'}}>Đã hoàn thành</Text>
                </View>
              );
            }}
          />
          {renderLegendComponent()}
        </View>
    </View>);
}
export default React.memo(TaskChart)
