// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import {
//   Image,
//   ImageBackground,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Pressable,
//   PermissionsAndroid,
// } from 'react-native';
// import React, {useState} from 'react';
// import login_bg from './src/assets/images/login-background.png';
// import Logo from './src/assets/images/Logo.png';
// import locationImage from './src/assets/images/location.png';
// import locationEnableImage from './src/assets/images/location-enable-image.png';
// import input_bg from './src/assets/images/input_bg.png';
// import order from './src/assets/images/order-icon.png';
// import password from './src/assets/images/pass_icon.png';
// // import axios from 'axios';
// // import AsyncStorage from 'react-native';
// // import Geolocation from 'react-native-geolocation-service';
// function App() {
//   return (
//     <ScrollView>
//       <ImageBackground className="flex h-screen relative" source={login_bg}>
//         <Image className="self-center items-center mt-20" source={Logo} />

//         {/* {!locationEnable ? (
//           <Pressable onPress={getLocation} className="z-50">
//             <Image className="self-center mt-2 mb-4" source={locationImage} />
//           </Pressable>
//         ) : ( */}
//         <Pressable className="z-50">
//           <Image
//             className="self-center mt-2 mb-4 w-[156] h-[156]"
//             source={locationEnableImage}
//           />
//         </Pressable>
//         {/* )} */}
//         <ImageBackground className="-mt-36  w-full h-[100vh]" source={input_bg}>
//           <View className="w-9/12 ml-auto mr-auto mt-24">
//             <Text className="text-[#000000] text-[29px] font-semibold ">
//               Login
//             </Text>
//             <Text>Please enter your login credential</Text>
//             <View className="mt-2.5">
//               <Text className="text-[#000000] text-[13px] font-medium">
//                 Order Number
//               </Text>
//               <View className="mt-2.5 flex flex-row items-center px-4 bg-[#EEEEEE] gap-x-2 rounded-lg">
//                 <Image source={order} />
//                 <TextInput
//                   className="w-full"
//                   // value={loginData.orderNumber}
//                   // onChangeText={val =>
//                   //   setLoginData({...loginData, orderNumber: val})
//                   // }
//                   placeholder="#123456"
//                   keyboardType="numeric"
//                 />
//               </View>
//             </View>
//             <View className="mt-2.5">
//               <Text className="text-[#000000] text-[13px] font-medium">
//                 Password
//               </Text>
//               <View className="mt-2.5 flex flex-row items-center px-4 bg-[#EEEEEE] gap-x-2 rounded-lg">
//                 <Image source={password} />
//                 <TextInput
//                   className="w-full  mt-1"
//                   // value={loginData.password}
//                   secureTextEntry={true}
//                   placeholder="***********"
//                   // onChangeText={val =>
//                   //   setLoginData({...loginData, password: val})
//                   // }
//                 />
//               </View>
//             </View>
//             <Pressable
//               // onPress={handleInput}
//               // disabled={!locationEnable && true}
//               className={`mt-7 w-[70%] justify-center mr-auto ml-auto bg-[#970000] h-12 rounded ${
//                 // !locationEnable ? 'opacity-60' :
//                 'opacity-100'
//               }`}>
//               <Text className="self-center text-[18px] text-white">Login</Text>
//             </Pressable>

//             {/* <Text className="self-center text-[18px] text-red-500">
//               {error}
//             </Text> */}
//             {/* {error && (
//               <Text className="self-center mt-1.5 text-red-700">{error}</Text>
//             )}
//              */}
//             {/* {!locationEnable && loginData.orderNumber && loginData.password && ( */}
//             <Text className="self-center mt-1.5 text-red-700">
//               Enable Location to Login
//             </Text>
//             {/* )} */}
//             <Text className="self-center mt-1.5">
//               Terms Of Use Privacy Policy
//             </Text>
//           </View>
//         </ImageBackground>
//       </ImageBackground>
//     </ScrollView>
//   );
// }

// export default App;

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import logo from './src/assets/images/Logo.png';
import truckIcon from './src/assets/images/truckIcon.png';
import boxIcon from './src/assets/images/truckIcon.png';
import line from './src/assets/images/Line.png';
import smartphone from './src/assets/images/Smartphone.png';
import navigation from './src/assets/images/navigationIcon.png';
import clock from './src/assets/images/clockIcon.png';
import buldingImage from './src/assets/images/dashboard-building-bg.png';
import logoutIcon from './src/assets/images/logoutIcon.png';
import {Pressable} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const App = () => {
  //   const navigation = useNavigation();

  const [userInfoStorage, setUserInfoStorage] = useState();
  const [userInfo, setUserInfo] = useState();

  // console.log('navigation', userData?.route?.params?.userData);
  // console.log('navigation1', navigation);

  //   const getSingleUser = async id => {
  //     const {data} = await axios.get(
  //       `https://jaro-backend.herokuapp.com/api/uploadCsv/getSingleUser/${id}`,
  //     );
  //     if (data) {
  //       console.log('data', data);
  //       setUserInfo(data?.data);
  //     }
  //   };

  //   useEffect(async () => {
  //     setUserInfoStorage(JSON.parse(await AsyncStorage.getItem('userData')));
  //   }, []);

  //   useEffect(() => {
  //     if (userInfoStorage) {
  //       getSingleUser(userInfoStorage?.user?._id);
  //     }
  //   }, [userInfoStorage]);

  // const handleLogout = async () => {
  //   try {
  //     await AsyncStorage.removeItem('userData');
  //     navigation.navigate('login');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // console.log('userInfo', userInfo);

  //   console.log('user Info storage', userInfoStorage);
  //   console.log('user info', userInfo);
  return (
    <ScrollView className="h-full">
      <View className="bg-white flex items-center pt-10 pb-5 rounded-bl-3xl rounded-br-3xl shadow-sm shadow-black">
        <Image source={logo} style={{width: 180, height: 55}} />
      </View>

      <View className="mt-5 bg-white mx-5 rounded-3xl relative shadow-sm shadow-black">
        <View className="pl-5 pt-5">
          <Text className="font-semibold text-black text-xl">
            Order Details
          </Text>
        </View>

        <View className="flex flex-row items-center h-[170]">
          <View className="flex flex-col items-center w-20">
            <View>
              <Image source={boxIcon} />
            </View>

            <View>
              <Image source={line} />
            </View>

            <View>
              <Image source={truckIcon} />
            </View>
          </View>

          <View>
            <View>
              <Text className="text-[#808285] text-md">Order No.</Text>
              <Text className="text-[#A71E21] text-xl font-semibold">
                {/* #{userInfo?.orderNumber} */}
                #5137
              </Text>
            </View>

            <View className="mt-[40%]">
              <Text className="text-[#808285] text-md">Pickup No.</Text>
              <Text className="text-[#A71E21] text-xl font-semibold">
                {/* #{userInfo?.pickupNumber} */}
                #2137
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-[#A71E21] w-[60] items-center py-4 rounded-tr-3xl rounded-bl-3xl absolute top-0 right-0">
          <Image source={smartphone} />
        </View>
      </View>

      <View className="bg-white mt-5 mx-5 rounded-3xl relative h-1/4 flex shadow-sm shadow-black">
        <View className="pl-5 pt-5">
          <Text className="font-semibold text-black text-xl">
            Location Info
          </Text>
        </View>

        <View className="mt-5 flex flex-col justify-between h-[48%]">
          <View
          //   className="flex flex-row justify-self-start pl-5 mb-5"
          >
            <View>
              <Image source={navigation} />
            </View>

            <Pressable
              className="ml-3 flex items-start"
              // onPress={() => navigation.navigate('map')}
            >
              <Text className="text-[#343434] font-medium text-lg p-0 mt-[-2%]">
                {/* {userInfo?.location} */}
                Newyork
              </Text>
              <Text className="p-0 m-0">{userInfo?.driverCoordinates}</Text>
            </Pressable>
          </View>

          <View className="flex flex-row justify-self-start pl-5">
            <View>
              <Image source={clock} />
            </View>

            <View className="ml-2 flex items-start">
              <Text className="text-[#343434] p-0 mt-[-3%]">
                {/* {userInfo?.updatedAt
                  ? userInfo?.updatedAt.split('T')[1].split('.')[0]
                  : ' '} */}
                11:00 pm
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex relative h-[40vh] mt-5 items-center">
        <View>
          <Image source={buldingImage} className="h-full" />
        </View>

        <View className="absolute flex w-full items-center  flex-col group">
          <Pressable
            // onPress={handleLogout}
            className="flex bg-white justify-center h-[80] w-[80] items-center rounded-full">
            <Image source={logoutIcon} />
          </Pressable>

          <View className="flex items-center justify-center">
            <Text className="text-[#A39696]">
              brokered by Jaro Transportation
            </Text>
            <Text className="text-[#A39696] pb-10 mt-2">330-393-5659</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
