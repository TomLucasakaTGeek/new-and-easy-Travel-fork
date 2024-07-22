import './style.css'

export default function Login() {
    return (
        <>
            <form className='box'>
                <input className="login"  type="text" placeholder='Email'/>
                <input className="login"  type="text" placeholder='Password'/>
                <button id='logbtn'>Log in</button>
            </form>
        </>
    )
}