import React from "react";
import Index from "../pages/index";

class App extends React.Component {
  state = {
    isDisconnected: false,
  };

  componentDidMount() {
    this.handleConnectionChange();
    window.addEventListener("online", this.handleConnectionChange);
    window.addEventListener("offline", this.handleConnectionChange);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleConnectionChange);
    window.removeEventListener("offline", this.handleConnectionChange);
  }

  handleConnectionChange = () => {
    const condition = navigator.onLine ? "online" : "offline";
    if (condition === "online") {
      const webPing = setInterval(() => {
        fetch("http://localhost:3000/", {
          mode: "no-cors",
        })
          .then(() => {
            this.setState({ isDisconnected: false }, () => {
              return clearInterval(webPing);
            });
          })
          .catch(() => this.setState({ isDisconnected: true }));
      }, 2000);
      return;
    }

    return this.setState({ isDisconnected: true });
  };

  render() {
    const { isDisconnected } = this.state;

    return (
      <>
        {/* {isDisconnected && (
          <div className={"offline"}>
            Internet lost. Application in offline mode
          </div>
        )} */}
        <Index />
      </>
    );
  }
}

export default App;
