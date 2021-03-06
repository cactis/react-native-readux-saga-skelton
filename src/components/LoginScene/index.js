import React from "react";
import {View} from "react-native";
import {
  Button,
  FormLabel,
  FormInput,
  Card
} from "react-native-elements";
import _ from "lodash";
import styles from "./styles";
import Color from "react-native-material-color";
import styled from "styled-components";

const Nav = styled.View`
  height: 64px;
  background-color: #CCCCCC;
`;

class LoginScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "joyce",
      pwd: "xup6"
    };
  }
  login = () => {
    const payload = _.pick(this.state, "account", "pwd");
    this.props.login(payload);
  }

  render() {
    return (
      <View>
        <Nav />
        <Card
          imageStyle={styles.loginCardImage}
          image={{ uri: "https://resolve.co.uk/assets/images/Blog%20Images/MailLogoBlog.png" }}>
          <FormLabel>Account</FormLabel>
          <FormInput
            value={this.state.account}
            onChangeText={(text) => this.setState({ account: text })} />
          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.state.pwd}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ pwd: text })} />
          <Button
            disabled={this.props.auth.get("isFetching")}
            backgroundColor={Color.Blue}
            onPress={this.login}
            containerViewStyle={styles.loginButton}
            large
            title='登入' />
        </Card>
      </View>
    );
  }
}

export default LoginScene;
