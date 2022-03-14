import React, {useState} from "react"

function HomePage() {
    var [arr, setValues] = useState([
        {
            id: 1,
            name: 'first',
            complete: false
        },
        {
            id: 2,
            name: 'second',
            complete: false
        },
        {
            id: 3,
            name: 'third',
            complete: false
        },
    ])
    const [likes, setLikes] = useState(0);
    const [inpText, setText] = useState('');
    function increment() {
        setLikes(likes + 1)
    }
    function changeState() {
        setValues(arr.map(item => {
            if(item.complete === false) {
                item.complete = true
                console.log('ok')
            } else {
                console.log('not ok')
            } return item
        }))
    }
    return ( 
        <div>
            <h2 className="text-center text-3xl font-bold text-red-600">HomePage</h2>
            <div>
                <p>{likes}</p>
                <button onClick={increment}>Click me!</button>
                <p>{inpText}</p>
                <input type='text' value={inpText} onChange={event => setText(event.target.value)}/>
                {
                    arr = arr.map(item => {
                        return <p onClick={changeState}>{item.name}</p>
                    })
                }
            </div>
        </div>
    );
}

export default HomePage;