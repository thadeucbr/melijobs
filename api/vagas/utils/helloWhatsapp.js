const sayHello = async () => {
  await axios.post('http://whatsapp:3339/sendText', {
    "args": {
      "to": "120363025308814807@g.us",
      "content": `
        ${Date.now()}
        API Reiniciada.
      `
    }
  }).catch((err) => console.log(err))
}

module.exports = sayHello;