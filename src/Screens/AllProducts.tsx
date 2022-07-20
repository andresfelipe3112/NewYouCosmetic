import React, { useEffect, useState } from "react";
import { Tab } from "../Components/Tab";
import { useNavigation } from '@react-navigation/native';
import { DetailComponentVertical } from "../Components/DetailComponentVertical";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { Title } from "../Components/Title";
import newApi from "../Services/LoginApiValues";


export const AllProducts = ({route}:any) => {


    const data = route?.params;
    const [dataParams, setDataParams] = useState(data);
    const [category, setCategory] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        setDataParams(route.params)
        console.log("router",data.title);
    },[route.params])

    useEffect(() => {
      route?.params?.title === "CAMISAS"     && setCategory("b15") // camisa
      route?.params?.title === "PANTALONES"  && setCategory("b17") // pantalon
      route?.params?.title === "COLLARES"    && setCategory("c11") // collares
      route?.params?.title === "BOTAS"    && setCategory("b24") // botas
      route?.params?.title === "ZAPATOS"   && setCategory("b21") // zapatos
      route?.params?.title === "BLUSAS" && setCategory("b11") // Blusas
      route?.params?.title === "POLERAS"   && setCategory("b13") // Poleras
      route?.params?.title === "CARTERAS"  && setCategory("a11") // aros
      route?.params?.title === "PULSERAS"  && setCategory("a14") // aros
      route?.params?.title === "RELOGES"  && setCategory("a12") // aros
      route?.params?.title === "PAÑUELOS"  && setCategory("a13") // aros
    },[])

    const deleteCategory = async () => {
      navigation.navigate('Root', {reRender:category})
      const data = await newApi.delete(`products/deleteCategory/${category}`)
    }
    
   const otono = require('../Assets/video/otono.mp4');
   const promo = require('../Assets/video/promo.mp4');
   const imageA = require('../Assets/Img/ropaA.jpg');
   const imageB = require('../Assets/Img/ropaB.jpg');
   const imageC = require('../Assets/Img/ropaC.jpg');
   const imageD = require('../Assets/Img/ropaD.jpg');


  return (
    <>
      <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
      <View
        style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", width: Dimensions.get("window").width, alignSelf: "center",
          height: 65,
          marginTop: 5
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
          }}>
          <Icon
            name='arrow-left'
            type='evilicon'
            color='#DED4E5'
            size={38}
            tvParallaxProperties={undefined}
            //@ts-ignore
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={() => deleteCategory()}
        style={{
          width: 190,
          // display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 3,
          backgroundColor: "#0B72A9",
          borderRadius: 20,
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        }}>
          <Text
            style={{ color: '#D4D7EE', }}
          >Eliminar Categoria</Text>
          <Icon
            name='minus'
            type='evilicon'
            color='#D4D7EE'
            size={40}
            tvParallaxProperties={undefined}
            //@ts-ignore
            onPress={() => navigation.navigate("Photo")}
          />
        </TouchableOpacity>
      </View>

         
        <FlatList
         ListHeaderComponent={()=>(
             <>
             <Video
             // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
             source={promo}
             resizeMode={"stretch"}
             opacity={1}
             controls={false}
             paused={false}
             volume={0}
             muted={true}
             disableBack
             disableVolume
             toggleResizeModeOnFullscreen
             repeat={true}
             bufferConfig={{
                 minBufferMs: 15000,
                 maxBufferMs: 50000,
                 bufferForPlaybackMs: 2500,
                 bufferForPlaybackAfterRebufferMs: 5000
             }}
             style={{
                 width: Dimensions.get("window").width * 0.95,
                 height: 200,
                 alignSelf: "center",
                 borderRadius: 20,
                 shadowColor: "#000",
                 shadowOffset: {
                     width: 0,
                     height: 6,
                 },
                 shadowOpacity: 0.37,
                 shadowRadius: 7.49,
                 elevation: 12,
             }}
             />
           <View style={{
               width: Dimensions.get("window").width * 0.95, display: "flex", justifyContent: "center",
               flexDirection: "row", margin: 4
             }}>
             <Text style={{ backgroundColor: "#809BBB", fontWeight: "bold", borderRadius: 5, padding: 2, margin: 2 }}>Patrocinado</Text>
             <Text
               style={{ color: "white", fontWeight: "bold", margin: 2 }}
               >  ADIDAS
             </Text>
             <Text
               style={{ color: "white", margin: 2 }}
               >Polera Adidas</Text>
           </View>
           <Title text={dataParams.title} />
           <View
             style={{
                 marginHorizontal: 10, display: "flex",
                 flexDirection: "row",
                 alignItems: "center",
                 flexWrap: "wrap",
             }}
             >
           </View>
         </>
         )}
        contentContainerStyle={{ 
            flexDirection: 'column',
            display: "flex",
            alignItems: "center",
        }}
        numColumns={2}
        data={dataParams.data}
        renderItem={({ item }:any) => (
            <>
            <DetailComponentVertical productoObj={item} />
            </>
          )}
        keyExtractor={item => item.id}
      />
</>
  )
}

const styles = StyleSheet.create({
  category: {
    borderColor: "white",
    backgroundColor: "#1F366C",
    borderWidth: 0.8,
    borderRadius: 10,
    margin: 5,
  },
  textCategory: {
    padding: 5,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "bold"
  }
})



// import React, {useState} from 'react';
// import {NativeStackScreenProps} from 'react-native-screens/native-stack';
// import {RootStackParamList} from '../../../navigation/RootStackParams';
// import styled from 'styled-components/native';
// import NavHeader from '../../../components/NavHeader';
// import strings from '../../../localization';
// import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
// import AutoSuggest from '../../../components/AutoSuggest';
// import Input from '../../../components/Input';
// import InputSlectScreen from '../../../components/SelectInput/InputSlectScreen';

// type Address1Props = NativeStackScreenProps<RootStackParamList, 'Address1'>;

// const Address1 = ({navigation}: Address1Props) => {
//   const [val, setVal] = useState('');
//   const [valCity, setValCity] = useState('');

//   return (
//     <MainContainer>
//       <NavHeader backIcon={true} center={strings.onboarding} /> 
//       <View style={styles.viewContainer}>
//         <AutoSuggest
//           label={strings.address}
//           value={val}
//           onChange={setVal}
//           onSearch={async () => {
//             return [
//               {title: 'Test', subtitle: 'test'},
//               {title: 'Test1', subtitle: 'test1'},
//               {title: 'Test2', subtitle: 'test2'},
//               {title: 'Test3', subtitle: 'test3'},
//             ];
//           }}
//           onOptionSelect={opt => setVal(opt.title)}
//           />
//       </View>
//       <View style={styles.viewContainer}>
//         <AutoSuggest
//           label={strings.city}
//           value={valCity}
//           onChange={setValCity}
//           onSearch={async () => {
//             return [
//               {title: 'Test', subtitle: 'test'},
//               {title: 'Test1', subtitle: 'test1'},
//               {title: 'Test2', subtitle: 'test2'},
//               {title: 'Test3', subtitle: 'test3'},
//             ];
//           }}
//           onOptionSelect={opt => setVal(opt.title)}
//           />
//       </View>
//       <View style={styles.viewContainer}>
//         <InputSlectScreen
//           label={strings.state}
//           onSearch={ [
//             {item: 'Test'},
//             {item: 'Test1'},
//             {item: 'Test2'},
//             {item: 'Test3'},
//           ]
//           }
//           />
//       </View>
//       <View style={styles.viewContainer}>
//         <Input
//         label={strings.zipCode}
//         />
//       </View>
//     </MainContainer>
//   );
// };

// const MainContainer = styled.SafeAreaView`
//   flex: 1;
// `;

// const styles = StyleSheet.create({
//   viewContainer:{
//     width: Dimensions.get("window").width * 0.8, 
//     alignSelf:"center",
//     marginTop:30,
//   }
// })

// export default Address1;



// import React, { useState } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import SelectBox from 'react-native-multi-selectbox'
// import styled from 'styled-components/native';
// import DownIcon from '../../assets/icons/down.svg';
// import ErrorIcon from '../../assets/icons/error.svg';
// import { mainTheme } from '../../styles/theme';
// import { designPxToScreenPx } from '../../utils/dimensions';
// import Header from '../CustomText/header';

// interface Input {
//     inputProps?: any,
//     label?: string,
//   helpText?: string,
//   errorText?: string,
//   error?: any,
//   leadingIcon?: any,
//   value?: string,
//   onChange?: () => void,
//   onSearch?: object[]
// }

// interface ItemI {
//   title: string;
//   subtitle?: string;
//   item?: any;
//   onPress?: () => void
// }

// const InputSlectScreen = ({
//   inputProps = {},
//   label,
//   onSearch,
//   helpText,
//   errorText,
//   error,
//   leadingIcon,
//   onChange,
// }: Input) => {
 
//   const [selectedTeam, setSelectedTeam] = useState({})
//   const [selectedTeams, setSelectedTeams] = useState([])

//   return (
//     <View>
//       <Label>{label}</Label>
//       <SelectBox
//         label={false}
//         inputPlaceholder=""
//         options={onSearch}
//         value={selectedTeam}
//         selectIcon={<DownIcon/>}
//         onChange={ (val:string) => setSelectedTeam(val)}
//         hideInputFilter={true}
//         optionsLabelStyle={styles.selectedItemStyle}//textoOptions
//         containerStyle={styles.containerStyle}//textoOptions
//         selectedItemStyle={styles.selectedItemStyle} // labelInput
//         arrowIconColor={"black"}
//       />
//       {error && errorText && <ErrorText>{errorText}</ErrorText>}
//     </View>
//   );
// }

// const SuggestionContainer = styled.TouchableOpacity`
//   padding: ${designPxToScreenPx(12)}px ${designPxToScreenPx(8)}px
//     ${designPxToScreenPx(12)}px ${designPxToScreenPx(8)}px;
//   border-bottom-width: 2px;
//   border-bottom-color: ${props => props.theme.NEUTRAL_200};
// `;

// const IconContainer = styled.View`
//   position: absolute;
//   right: 22px;
//   top: 18px;
// `;

// const StyledInput = styled.TextInput`
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 15px;
//   line-height: 21px;
//   color: ${(props) => props.theme.NEUTRAL_900};
//   flex-grow: 1;
//   padding: 14.5px ${props => (props.leadingIcon ? '48px' : '20px')} 14.5px 20px;
//   width:90%
//   border-width: 1px;
//   border-style: solid;
//   border-color: ${props => props.theme.SECONDARY_100};
//   border-radius: 6px;
// `;
// const Label = styled.Text`
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 14.4;
//   margin-bottom: 6px;
//   color: ${props => props.theme.NEUTRAL_900};
// `;

// const BottomText = styled.Text`
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 13px;
//   line-height: 15.6px;
// `;

// const HelpText = styled(BottomText)`
//   color: ${props => props.theme.NEUTRAL_700};
//   margin-top: 6px;
// `;

// const ErrorText = styled.Text`
//   color: ${props => props.theme.ERROR_700};
//   margin-top: 6px;
// `;

// const InputContainer = styled.View`
//   display:flex;
//   flex-direction:row;
//   align-items:center;
//   justify-content:space-around;
//   padding: 1px;
//   border-width: 2px;
//   border-style: solid;
//   border-color: ${props =>
//     props.error ? props.theme.ERROR_300 : 'transparent'};
//   border-radius: 6px;
//   width: 100%;
//   background-color: ${props =>
//     props.error ? props.theme.WHITE : props.theme.SECONDARY_100};
// `;
// const InputContainerSelectItem = styled.TouchableOpacity`
//   position: relative;
//   borderBottom-width: 0.2px;
//   border-style: solid;
//   border-radius: 1px;
//   width: 80%;
//   padding:10px;
//   margin-vertical:1;
//   margin-horizontal:5%;
// `;

// const styles = StyleSheet.create({
//   containerStyle:{
//     backgroundColor:'#fffaff',
//     borderColor:'trasnparent',
//     height:55,
//     display:"flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   selectedItemStyle:{
//     fontFamily:'Montserrat',
//     fontSize:12,
//     color:"#4b4656"
//   }

// })

// export default InputSlectScreen;
