const HistoryList = props => {
  const {each, DeleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = each

  const onDelete = () => {
    DeleteList(id)
  }
  return (
    <li className="li">
      <p className="para">{timeAccessed}</p>
      <img src={logoUrl} className="img2" alt="domain logo" />
      <p className="para">{title}</p>
      <p className="para1">{domainUrl}</p>
      <button
        className="button1"
        type="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="img3"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryList
