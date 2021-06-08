import "./App.css";

import Profile from "./Profile/Profile";
import userinformation from "./Profile/user.json";

import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friendList.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transaction-history.json";

function App() {
  return (
    <div>
      <div>
        <h2>задание 1</h2>
        <Profile
          name={userinformation.name}
          tag={userinformation.tag}
          location={userinformation.location}
          avatar={userinformation.avatar}
          stats={userinformation.stats}
        />
      </div>
      <div>
        <h2>задание 2</h2>
        <div>
          <Statistics title="Upload stats" stats={statisticalData} />
        </div>
      </div>
      <div>
        <h2>задание 3</h2>
        <div>
          <FriendList friends={friends} />
        </div>
      </div>
      <div>
        <h2>задание 4</h2>
        <div>
          <TransactionHistory items={transactions} />
        </div>
      </div>
    </div>
  );
}

export default App;
