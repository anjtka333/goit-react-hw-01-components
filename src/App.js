import React from "react";
import user from "./data/user.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactionsData from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
