import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const TaskChart = () => {
    const dataNumTask = useSelector(state => state?.auth?.dataNumTask);
  const pieData = [
    { value:  (dataNumTask?.numTaskDone / dataNumTask?.totalTask) * 100, color: '#7FFFD4', focused: true},
    {value:  (dataNumTask?.numTaskDoing / dataNumTask?.totalTask) * 100, color: '#836FFF' },
    { value:  (dataNumTask?.numTaskOutDate / dataNumTask?.totalTask) * 100, color: '#CD853F'},
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
      <View style={{marginLeft:10,flex:1}}>
        <Text style={{color: 'black',fontSize:15,marginBottom:10,flexWrap:"wrap"}}>{"Bạn có tổng số: "+dataNumTask?.totalTask+" công việc"}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}>
          {renderDot('#7FFFD4')}
          <Text style={{color: 'black'}}>{"Đã hoàn thành: "+dataNumTask?.numTaskDone}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
            marginVertical:10
          }}>
          {renderDot('#836FFF')}
          <Text style={{color: 'black'}}>{"Đang xử lý: "+dataNumTask?.numTaskDoing}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}>
          {renderDot('#CD853F')}
          <Text style={{color: 'black'}}>{"Quá hạn xử lý: "+dataNumTask?.numTaskOutDate}</Text>
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
            innerRadius={40}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 10, color: 'white', fontWeight: 'bold'}}>
                      {((dataNumTask?.numTaskDone / dataNumTask?.totalTask) * 100)+"%"}
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
