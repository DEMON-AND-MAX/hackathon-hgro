
function Message() {
    let name = 'max';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>noname lol</h1>
}

export default Message;