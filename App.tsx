import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

// import Navigation from './navigation';
// import Buttons from "./screens/Buttons";
// import FlatLists from "./screens/FlatList";
// import DisplayAnImage from "./screens/Image";
// import ImageBackgrounds from "./screens/ImageBackground";
// import KeyboardAvoidingView from "./screens/KeyboardAvoidingView";
// import Modals from "./screens/Modal";
// import Pressables from "./screens/Pressable";
// import RefreshControls from "./screens/RefreshControl";
// import ScrollViews from "./screens/SrcollViews";
// import SectionLists from "./screens/SectionList";
// import StatusBars from "./screens/StatusBar";
// import Switches from "./screens/Switch";
// import TextInANest from "./screens/Text";
// import UselessTextInput from "./screens/TextInput";
// import TouchableHighlightExample from "./screens/TouchableHighlight";
// import TouchableOpacities from "./screens/TouchableOpacity";
// import TouchableWithoutFeedbackExample from "./screens/TouchableWithoutFeedback";
// import ViewBoxesWithColorAndText from "./screens/View";
// import VirtualiedList from "./screens/VirtualizedList";
// import InputAccessoryViews from "./screens/InputAccessoryView";
// import MyMaskedView from "./screens/MaskedViewiOS";
// import SafeAreaViews from "./screens/SafeAreaView";
// import ImageStylePropsImgWithStyle from "./screens/ImageStyleProps-ImgWithStyle";
// import ImageStylePropsImgWithBorderRadius from "./screens/ImageStyleProps-ImgWithBorderRadius";
// import DisplayAnImageWithBorderWidthBorderRadius from "./screens/ImageStyleProps-ImgWithBorderWidthBorderRadius";
// import DisplayAnImageWithTintColor from './screens/ImageStyleProps-ImgWithTintColor';
// import LayoutProps from './screens/LayoutProps';
// import ShadowProps from './screens/ShadowProps';
// import TextStyleProps from './screens/TextStyleProps';
// import ViewStyleProps from './screens/ViewStyleProps';
// import PressEventObjectType from './screens/PressEventObjectType';
// import { ReactNodeObjectType } from "./screens/ReactNodeObjectType";
import { RectObjectTpe } from "./screens/RectObjectType";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StatusBar /> */}
        {/* <Buttons></Buttons> */}
        {/* <FlatLists></FlatLists> */}
        {/* <DisplayAnImage></DisplayAnImage> */}
        {/* <ImageBackgrounds></ImageBackgrounds> */}
        {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
        {/* <Modals></Modals> */}
        {/* <Pressables></Pressables> */}
        {/* <RefreshControls></RefreshControls> */}
        {/* <ScrollViews></ScrollViews> */}
        {/* <SectionLists></SectionLists> */}
        {/* <StatusBars></StatusBars> */}
        {/* <Switches></Switches> */}
        {/* <TextInANest></TextInANest> */}
        {/* <UselessTextInput></UselessTextInput> */}
        {/* <TouchableHighlightExample></TouchableHighlightExample> */}
        {/* <TouchableOpacities></TouchableOpacities> */}
        {/* <TouchableWithoutFeedbackExample></TouchableWithoutFeedbackExample> */}
        {/* <ViewBoxesWithColorAndText></ViewBoxesWithColorAndText> */}
        {/* <VirtualiedList></VirtualiedList> */}
        {/* <InputAccessoryViews></InputAccessoryViews> */}
        {/* <MyMaskedView></MyMaskedView> */}
        {/* <SafeAreaViews></SafeAreaViews> */}
        {/* <ImageStylePropsImgWithStyle></ImageStylePropsImgWithStyle>
        <ImageStylePropsImgWithBorderRadius></ImageStylePropsImgWithBorderRadius>
        <DisplayAnImageWithBorderWidthBorderRadius></DisplayAnImageWithBorderWidthBorderRadius>
        <DisplayAnImageWithTintColor></DisplayAnImageWithTintColor> */}
        {/* <LayoutProps></LayoutProps> */}
        {/* <ShadowProps></ShadowProps> */}
        {/* <TextStyleProps></TextStyleProps> */}
        {/* <ViewStyleProps></ViewStyleProps> */}
        {/* <PressEventObjectType></PressEventObjectType> */}
        {/* <ReactNodeObjectType></ReactNodeObjectType> */}
        <RectObjectTpe></RectObjectTpe>
      </SafeAreaProvider>
    );
  }
}
