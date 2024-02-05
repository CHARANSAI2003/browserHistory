import {Component} from 'react'
import './index.css'
import HistoryList from '../HistoryList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {
    search: '',
    initialHistoryListData: initialHistoryList,
    Length: initialHistoryList.length,
    LengthCheck: true,
  }

  onInput = event => {
    this.setState({search: event.target.value})
  }

  DeleteList = id => {
    const {initialHistoryListData, Length} = this.state
    const UpdateList = initialHistoryListData.filter(each => each.id !== id)
    this.setState({initialHistoryListData: UpdateList})
    this.setState(prevState => ({Length: prevState.Length - 1}))
    if (Length === 1) {
      this.setState({LengthCheck: false})
    }
    console.log(Length)
  }

  render() {
    const {search, initialHistoryListData, LengthCheck} = this.state
    const result = initialHistoryListData.filter(eachList =>
      eachList.title.includes(search),
    )

    return (
      <div className="app-container">
        <div className="upper-Historydata">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="img"
            alt="app logo"
          />
          <div className="search-History">
            <button className="button" type="button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="img1"
                alt="search"
              />
            </button>
            <input
              type="search"
              className="input"
              onChange={this.onInput}
              placeholder="Search History"
              value={search}
            />
          </div>
        </div>
        {result.length !== 0 ? (
          <div className="lower-history">
            <ul className="list-container">
              {result.map(each => (
                <HistoryList
                  key={each.id}
                  each={each}
                  DeleteList={this.DeleteList}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="lower-history">
            <p className="h1">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}

export default History
