import * as React from "react";
import { Header, Icon } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {useEffect, useState} from "react";

export default (props) => {
    let [x, setX]  = useState('');
    useEffect(() => {
        // toast.success(`Hey ${props.props.name}, Welcome back!`);
        console.log(props.props)
         setX(props.props)
    }, []);

  return (
      <Header
          backgroundImageStyle={{}}
          barStyle="default"
          centerComponent={{
            text: {x},
            style: { color: "#fff" }
          }}
          centerContainerStyle={{}}
          containerStyle={{ width: '100%',height:'10%' }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          leftContainerStyle={{}}
          linearGradientProps={{}}
          placement="center"
          rightComponent={{ icon: "home", color: "#fff" }}
          rightContainerStyle={{}}
          statusBarProps={{}}
      />
  );
}
