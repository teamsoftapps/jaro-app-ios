// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

const {default: Dashboard} = require('./src/screens/Dashboard/DashboardScreen');

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

import {View} from 'react-native';

function App() {
  return (
    <View>
      <Dashboard />
    </View>
  );
}

export default App; 