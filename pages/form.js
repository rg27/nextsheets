import React, { useState } from "react"

export default function Form() {
  const [formData, setFormData] = useState({})
  const [message, setMessage] = useState("")

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }

  const sendData = async (e) => {
    e.preventDefault()
    const { name, email, age } = formData
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/thebro/google_sheets/TylXJHhzDykyXfXk?tabId=Sheet1",
        {
          method: "post",
          body: JSON.stringify([[name, email, age]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const json = await response.json()
      console.log("Success:", JSON.stringify(json))
      setMessage("Success")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Error")
    }
  }

  return (
    <div className="App">
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />

        <input
          name="age"
          type="age"
          placeholder="Age"
          required
          onChange={handleInput}
        />
        <input name="submit" type="submit" value="Send" />
        {message}
      </form>
    </div>
  )
}
