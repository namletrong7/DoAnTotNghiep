import { PieChart } from "react-native-gifted-charts";
import { Text, View } from "react-native";
import React from "react";

const ProjectChartComponet = () => {
  const pieData = [
    { value: 47, color: '#009FFF', gradientCenterColor: '#006DFF', focused: true, },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
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
      <>
        <View
          style={{
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex:1,
              marginRight: 20,
            }}>
            {renderDot('#006DFF')}
            <Text style={{color: 'black'}}>Chưa thực hiện: 47%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderDot('#8F80F3')}
            <Text style={{color: 'black'}}>Chưa thực hiện: 16%</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex:1,
              marginRight: 20,
            }}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'black'}}>Tạm dừng: 40%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderDot('#FF7F97')}
            <Text style={{color: 'black'}}>Đã kết thúc: 3%</Text>
          </View>
        </View>
      </>
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
        <Text
          style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
          Tiến độ thực hiện các dự án
        </Text>
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
export default React.memo(ProjectChartComponet)
