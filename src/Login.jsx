import { useState } from "react";
import "./App.scss";

const Login = () => {

  const [data, setData] = useState({ email: "", password: "" })

  const changeData = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault()
    alert("¡Bienvenido!")
    setData({ email: "", password: "" });
    console.log(data)
    window.location.href = "https://www.legalzoom.com/country/co"

  }
  return (
    <div className="ed-grid">
      <form className="ed-container l-30" onSubmit={submit}>
        <div className="ed-item form__item">
          <label htmlFor="email">
            Correo Electronico
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={changeData}
            />
          </label>
        </div>
        <div className="ed-item form__item">
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={changeData}
            />
          </label>
        </div>
        <div className="ed-item form__item">
          <input type="submit" value="Ingresar" className="button full" />
        </div>
      </form>
    </div>
  )
}


export default Login;
