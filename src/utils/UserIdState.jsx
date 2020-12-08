const userState = (defaultValue, key) => {
  const [userID, setUserID] = useState(() => {
      const stickValue = window.localStorage.getItem(key)

      return stickValue !== null
      ? JSON.parse(stickValue)
      :defaultValue
  })

  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(userID))
  }, [key, userID])
  return [userID, setUserID]

}